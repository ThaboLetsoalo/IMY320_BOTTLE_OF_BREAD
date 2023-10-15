import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.page.html',
  styleUrls: ['./add-material.page.scss'],
})
export class AddMaterialPage implements OnInit {

  isLoading: boolean = true;


  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading Discussion Modal..',
      duration: 4000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.message = 'Discussion Modal loaded';
    }, 3000);

    setTimeout(() => {
      loading.dismiss();
      this.isLoading = false; 
    }, 4000);
  }

  async addingMaterial()
  {
    const loading = await this.loadingController.create({
      message: 'Adding Discussion..',
      duration: 4000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.message = 'Discussion added';
    }, 3000);

    setTimeout(() => {
      loading.dismiss();
      this.closeModal();
    }, 4000);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
