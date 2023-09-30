import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';
import { AlertController, NavController } from '@ionic/angular';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly authObject: Auth,
    private Nav: NavController,
    private alertController: AlertController, 
    private profileService: ProfileService) {}

  auth$() {
    return authState(this.authObject);
  }

  async getCurrentUserId() {
    const auth = getAuth();
    return (auth.currentUser?.uid);
  }

  async login(regEmail: string, regPassword: string) {
    try {
      await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      this.Nav.navigateRoot('/home'); 
    } catch (error) {
      console.error('Firebase error:', error);
    }
  }

  async register(regEmail: string, regPassword: string) {
    try {
      await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
      const currentUserId = await this.getCurrentUserId();
      if(currentUserId) {
        this.profileService.createUserProfile(regEmail, currentUserId)
      }
    } catch (error) {
      console.log(error);
    }
  }

  async continueWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(this.authObject, googleAuthProvider);
    this.Nav.navigateRoot('/home')
    return userCredentials;
  }

  async LogoutConfirmed() {
    return await signOut(this.authObject);
  }

  async logout() {
    await this.LogoutConfirmed();
  }
}