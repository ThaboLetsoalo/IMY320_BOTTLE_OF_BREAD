import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CustomloaderPage } from '../customloader/customloader.page';
import { IonSpinner } from '@ionic/angular';

@Component({
  selector: 'app-book-tutor-modal',
  templateUrl: './book-tutor-modal.page.html',
  styleUrls: ['./book-tutor-modal.page.scss'],

})
export class BookTutorModalPage implements OnInit {
  
  @Input() tutor: any;
  isLoading: boolean = true; 
  selected: Date = new Date();
  minDate: Date | undefined ;
  maxDate: Date | undefined;
  subject : string = '';
  selectedSubject: string = '';
  selectedDuration: number = 0;
  durations: number[] = [];
  availableTimes: string[] = ['08:00','09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
  chosenTimes: string[] = this.chooseSixTimes();
  loadAvailable = false;
  selectedTime: string = '';
  
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) {}

  async loadAvailableTimes() 
  {
    this.loadAvailable = true;
    const loadAvailable = await this.loadingController.create({
      message: 'Looking For available times...',
      duration: 4000,
      spinner: 'bubbles', 
      translucent: true,
      cssClass: 'custom-loader-class',

    });

    await loadAvailable.present();

    setTimeout(() => {
      loadAvailable.message = 'Available times found';
    }, 3000);

    setTimeout(() => {
      loadAvailable.dismiss();
      this.loadAvailable = false;
      this.chosenTimes = this.chooseSixTimes();
    }, 4000);
  }

  chooseSixTimes() {
    let times = [...this.availableTimes];
    let chosenTimes = [];
  
    for (let i = 0; i < 6; i++) {
      if (times.length === 0) {
        break;
      }
      
      const randomIndex = Math.floor(Math.random() * times.length);
      chosenTimes.push(times[randomIndex]);
      times.splice(randomIndex, 1);
    }
  
    return chosenTimes.sort();
  }  

  async ngOnInit() {
    
    const loading = await this.loadingController.create({
      message: 'Loading Booking Modal..',
      duration: 4000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.message = 'Booking Modal loaded';
    }, 3000);

    setTimeout(() => {
      loading.dismiss();
      this.isLoading = false; 
      this.selected = new Date();
      this.minDate = new Date();
      this.maxDate = new Date(this.minDate.getFullYear() + 2, this.minDate.getMonth() + 1, this.minDate.getDate());
      this.selectedSubject = this.tutor.subjects[0];
      this.selectedDuration = 0.5;
      this.durations = [0.5, 1, 1.5, 2];
      this.selectedTime = this.chosenTimes[0];

    }, 4000);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  bookSession() {

    //Show loading modal
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Booking Session - Subject: ' + this.selectedSubject + ' - Duration: ' + this.selectedDuration + ' - Date: ' + this.selected,
      duration: 4000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.message = 'Session booked';
    }, 3000);
    
    setTimeout(() => {
      //show that session is booked at 1.8 seconds
      
      loading.dismiss();
      this.modalController.dismiss();
    }, 4000);
  }

}
