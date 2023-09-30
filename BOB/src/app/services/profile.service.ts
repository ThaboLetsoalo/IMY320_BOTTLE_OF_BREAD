import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private firestore: AngularFirestore,  private Nav: NavController,) {}

    createUserProfile(email: string, userId: string) {
        const name: string = email.split('@')[0];
        const timestamp: Timestamp = Timestamp.now();
        this.firestore.doc(`profiles/${userId}`).set({
            userId: userId,
            name: name,
            displayName: name,
            createdAt: timestamp,
            profileURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            student: true,
            Tutor: false,
        })
        this.Nav.navigateRoot('/home'); 
    }
}