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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
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

  // async login(regEmail: string, regPassword: string) {
  //   try {
  //     await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
  //     this.Nav.navigateRoot('/home'); 
  //   } catch (error) {
  //     console.error('Firebase error:', error);
  //   }
  // }

  async login(regEmail: string, regPassword: string) {
    try {
      await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      this.Nav.navigateRoot('/home');
  
      // Display a success toast message
      const toast = await this.toastController.create({
        message: 'Login successful!',
        duration: 2000, // Duration in milliseconds
        position: 'top', // Position can be 'top', 'bottom', 'middle'
        color: 'success', // Use a color to style the toast
      });
      await toast.present();
    } catch (error) {
      console.error('Firebase error:', error);
  
      // Display an error toast message
      const toast = await this.toastController.create({
        message: 'Login failed. Please check your credentials and try again.',
        duration: 5000, // Duration in milliseconds
        position: 'top', // Position can be 'top', 'bottom', 'middle'
        color: 'danger', // Use a color to style the toast
      });
      await toast.present();
    }
  }
  

  // async register(regEmail: string, regPassword: string) {
  //   try {
  //     await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
  //     const currentUserId = await this.getCurrentUserId();
  //     if(currentUserId) {
  //       this.profileService.createUserProfile(regEmail, currentUserId)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
    this.Nav.navigateRoot('/home')
    return userCredentials;
  }

  async LogoutConfirmed() {
    return await signOut(this.authObject);
  }

  async logout() {
   await signOut(this.authObject);
  }
}