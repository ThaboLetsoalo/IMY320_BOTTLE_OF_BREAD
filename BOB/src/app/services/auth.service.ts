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
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private readonly authObject: Auth,
    private Nav: NavController,
    private alertController: AlertController, 
    private profileService: ProfileService,
    private toastController: ToastController) {}

  auth$() {
    return authState(this.authObject);
  }

  async getCurrentUserId() {
    const auth = getAuth();
    return (auth.currentUser?.uid);
  }

  getUser(){
    return this.afAuth.authState;
  }

  async login(regEmail: string, regPassword: string) {
    try {
      await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      
      const toast = await this.toastController.create({
        message: 'Login successful!',
        duration: 2000, 
        position: 'top',
        color: 'success',
      });
      await toast.present();
      this.Nav.navigateRoot('/home/study-material');
    } catch (error) {
      console.error('Firebase error:', error);
  
      const toast = await this.toastController.create({
        message: 'Login failed. Please check your credentials and try again.',
        duration: 5000,
        position: 'top',
        color: 'danger',
      });
      await toast.present();
    }
  }

  async register(regEmail: string, regPassword: string) {
    try {
      await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
      const currentUserId = await this.getCurrentUserId();
      if (currentUserId) {
        this.profileService.createUserProfile(regEmail, currentUserId);
      }
  
      const toast = await this.toastController.create({
        message: 'Registration successful!',
        duration: 2000, 
        position: 'top',
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      console.error(error);
  
      const toast = await this.toastController.create({
        message: 'Registration failed. Please try again.',
        duration: 5000, 
        position: 'top',
        color: 'danger',
      });
      await toast.present();
    }
  }  

  async continueWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(this.authObject, googleAuthProvider);
    this.Nav.navigateRoot('/study-material')
    return userCredentials;
  }

  async logout() {
   await signOut(this.authObject);
   this.Nav.navigateRoot("/login");
  }
}