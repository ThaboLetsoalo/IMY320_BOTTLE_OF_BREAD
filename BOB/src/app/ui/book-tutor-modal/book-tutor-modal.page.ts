import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-tutor-modal',
  templateUrl: './book-tutor-modal.page.html',
  styleUrls: ['./book-tutor-modal.page.scss'],
})
export class BookTutorModalPage {
  @Input() tutor: any;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }
}