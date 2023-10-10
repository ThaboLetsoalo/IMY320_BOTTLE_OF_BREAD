import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-book-tutor-modal',
  templateUrl: './book-tutor-modal.page.html',
  styleUrls: ['./book-tutor-modal.page.scss'],
})
export class BookTutorModalPage implements OnInit {
  @Input() tutor: any;
  isLoading: boolean = true; 

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000, 
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.isLoading = false; 
    }, 2000);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
