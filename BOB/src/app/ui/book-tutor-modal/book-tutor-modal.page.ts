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
  selected: Date | undefined;
  minDate: Date | undefined ;
  maxDate: Date | undefined;
  subject : string = '';
  selectedSubject: string = '';
  selectedDuration: number = 0;
  durations: number[] = [];
  
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
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
      this.selected = new Date();
      this.minDate = new Date();
      this.maxDate = new Date(this.minDate.getFullYear() + 2, this.minDate.getMonth() + 1, this.minDate.getDate());
      this.selectedSubject = this.tutor.subjects[0];
      this.selectedDuration = 0.5;
      this.durations = [0.5, 1, 1.5, 2];

    }, 2000);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
