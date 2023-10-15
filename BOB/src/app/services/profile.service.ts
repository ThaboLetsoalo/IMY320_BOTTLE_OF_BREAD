import { NotifyService } from './notify.service';
import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Observable, catchError, last, lastValueFrom, map, of, switchMap, tap } from 'rxjs';
import { IProfile } from '../modals';
import { C } from '@fullcalendar/core/internal-common';
import { authState } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private firestore: AngularFirestore,  private Nav: NavController,  private afAuth: AngularFireAuth,private notify:NotifyService) {}

    getUser(){
        return this.afAuth.authState;
    }


    createUserProfile(email: string, userId: string) {
        const name: string = email.split('@')[0];
        const timestamp: Timestamp = Timestamp.now();
        this.firestore.doc<IProfile>(`profiles/${userId}`).set({
            userId: userId,
            name: name,
            email: email,
            displayName: name,
            createdAt: timestamp,
            profileURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            isStudent: true,
            isTutor: false,
            lastName: ''
        })
        this.Nav.navigateRoot('/home'); 
    }

    async getCurrentUserId() {
        const auth = getAuth();
        return (auth.currentUser?.uid);
    }

    getProfile(): Observable<IProfile| null> {
        return this.getUser().pipe(
          switchMap((user) => {
            if (user) {
              const docRef = this.firestore.doc<IProfile>(`profiles/${user.uid}`);
              return docRef.valueChanges().pipe(
                map((profile) => {
                  if (profile) {
                    return { ...profile, userId: user.uid };
                  } else {
                    return null;
                  }
                }),
                catchError((error) => {
                  console.error('Error getting profile:', error);
                  return of(null);
                })
              );
            } else
              return of(null);
          })
        );
      }

    async getUserProfile(userId: string) {
        return (await lastValueFrom(this.firestore.doc<IProfile>(`profiles/${userId}`).get())).data();
    }

    async editProfile(profile: IProfile) {
        try {
            const auth = getAuth();
            const currUserId = auth.currentUser?.uid;
            if(currUserId) {
                const docRef = this.firestore.doc<IProfile>(`profiles/${currUserId}`);
                docRef.update(profile);
            }
            this.notify.notifySuccess("Success: Profile edit completed successfully.")
        } catch(error) {
          this.notify.notifyFailure("Failure: Profile edit action unsuccessful.")
            console.log("error");
        }
    }
}