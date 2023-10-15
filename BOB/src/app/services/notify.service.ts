import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class NotifyService {
    constructor( private toastController: ToastController) {}

    async notifySuccess(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000, 
            position: 'top',
            color: 'success',
          });
          await toast.present();
    }

    async notifyFailure(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000, 
            position: 'top',
            color: 'danger',
          });
          await toast.present();
    }
}