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
  eventEndDate: string = '';

  constructor(private modalController: ModalController, private navParams: NavParams) {}

  createEvent() {
    // Get the FullCalendar component from NavParams
    const calendarComponent = this.navParams.get('calendarComponent');

    // Create an event object
    const event = {
      title: this.eventTitle,
      start: this.eventStartDate,
      end: this.eventEndDate,
    };

    // Add the event to FullCalendar
    calendarComponent.getApi().addEvent(event);

    // Close the modal
    this.modalController.dismiss();
  }

  close() {
    this.modalController.dismiss();
  }
}
