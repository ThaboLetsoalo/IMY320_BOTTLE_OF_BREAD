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
      message: 'Loading modal..',
      duration: 2000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.isLoading = false; 
    }, 2000);
  }

  async addingMaterial()
  {
    const loading = await this.loadingController.create({
      message: 'Submitting answer...',
      duration: 2000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.closeModal();
    }, 2000);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
