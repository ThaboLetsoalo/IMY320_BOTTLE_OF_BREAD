import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

export interface ChipColor {
  name: string;
}

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
  availableTimes: string[] = ['08:00','09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
  chosenTimes: string[] = this.chooseSixTimes();
  
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) {}

  chooseSixTimes() {
    // choose random 6 times from availableTimes
    let times = this.availableTimes;
    let chosenTimes = [];
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * times.length);
      chosenTimes.push(times[randomIndex]);
      times.splice(randomIndex, 1);
    }
    return chosenTimes.sort();
  }

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

  bookSession() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
