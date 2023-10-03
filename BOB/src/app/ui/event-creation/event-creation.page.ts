import { Component } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { ModalController, NavParams } from '@ionic/angular';
import { IAddSchedule, ISchedule } from 'src/app/modals/schedule.model';
import { SchedulesService } from 'src/app/services/schedules.service';


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
  eventDescription: string = '';

  constructor(private modalController: ModalController, private navParams: NavParams, private scheduleServices: SchedulesService) {}

  createEvent() {
    const calendarComponent = this.navParams.get('calendarComponent');

    const event = {
      title: this.eventTitle,
      start: `${this.eventStartDate}T${this.eventStartTime}`,
      end: `${this.eventEndDate}T${this.eventEndTime}`,
    };

    const schedule: ISchedule = {
      title: this.eventTitle,
      description: this.eventDescription,
      startDate: Timestamp.fromDate(new Date(`${this.eventStartDate}T${this.eventStartTime}`)),
      endDate: Timestamp.fromDate(new Date(`${this.eventEndDate}T${this.eventEndTime}`))
    }
    const request:IAddSchedule = {
      schedule: schedule
    }
    this.scheduleServices.addSchedule(request).then(()=>{
      calendarComponent.getApi().addEvent(event);
      this.modalController.dismiss();
    });
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
