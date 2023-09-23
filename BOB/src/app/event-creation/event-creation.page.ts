import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.page.html',
  styleUrls: ['./event-creation.page.scss'],
})
export class EventCreationPage {
  eventTitle: string = '';
  eventStartDate: string = '';
  eventStartTime: string = '';
  eventEndDate: string = '';
  eventEndTime: string = '';

  constructor(private modalController: ModalController, private navParams: NavParams) {}

  createEvent() {
    const calendarComponent = this.navParams.get('calendarComponent');

    const event = {
      title: this.eventTitle,
      start: this.eventStartDate + 'T' + this.eventStartTime,
      end: this.eventEndDate + 'T' + this.eventEndTime,
    };

    calendarComponent.getApi().addEvent(event);

    this.modalController.dismiss();
  }

  close() {
    this.modalController.dismiss();
  }

  ifFullyFilled () {
    if( this.eventEndDate.trim() === '' || this.eventEndTime.trim() === '' || this.eventStartDate.trim() === '' || this.eventStartTime.trim() === '' || this.eventTitle.trim() === '') {
      return false;
    }
    return true;
  }
}
