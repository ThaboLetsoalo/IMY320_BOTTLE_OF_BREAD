import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { last, lastValueFrom, map, of, tap } from 'rxjs';
import { IProfile } from '../modals';
import { C } from '@fullcalendar/core/internal-common';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private firestore: AngularFirestore,  private Nav: NavController,) {}

    createUserProfile(email: string, userId: string) {
        const name: string = email.split('@')[0];
        const timestamp: Timestamp = Timestamp.now();
        this.firestore.doc<IProfile>(`profiles/${userId}`).set({
            userId: userId,
            name: name,
            displayName: name,
            createdAt: timestamp,
            profileURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            isStudent: true,
            isTutor: false,
        })
        this.Nav.navigateRoot('/home'); 
    }

    async getCurrentUserId() {
        const auth = getAuth();
        return (auth.currentUser?.uid);
    }

    // async getProfile(userId?: string) {
    //     if(userId)
    //         return (await this.getUserProfile(userId));
    //     const currentUserId = await this.getCurrentUserId();
    //     if(currentUserId)
    //         return (await this.getUserProfile(currentUserId));
    //     return;
    // }

    getProfile() {
        const auth = getAuth();
        const currUserId = auth.currentUser?.uid;
        if(currUserId) {
            const docRef = this.firestore.doc<IProfile>(`profiles/${currUserId}`);
            return docRef.snapshotChanges().pipe(map((snapshot)=>{
                const profile: IProfile = {
                    ...snapshot.payload.data() as IProfile,
                    userId: snapshot.payload.id
                }
                return profile;
            }))
        }
        return of({});
    }

    async getUserProfile(userId: string) {
        return (await lastValueFrom(this.firestore.doc<IProfile>(`profiles/${userId}`).get())).data();
    }
}