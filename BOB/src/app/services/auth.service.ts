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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly authObject: Auth,
    private Nav: NavController,
    private alertController: AlertController) {}

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
      this.IncorrectCombination();
    }
  }

  async IncorrectCombination()
  {
    const alert = await this.alertController.create({
      header: 'Invalid Login Information',
      message: 'Incorrect email password combination',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  async register(regEmail: string, regPassword: string) {
    try {
      await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
      this.Nav.navigateRoot('/home');
      return true;
    } catch (error) {
      console.error('Firebase error:', error);
      alert("Incorrect registration info.");
      return false;
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