import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventCreationPage } from '../event-creation/event-creation.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})
export class SchedulesPage implements OnInit {

  selectedView: string = 'timeGridWeek'; //'timeGridDay';dayGridMonth, dayGridWeek, timeGridDay)
  calendarOptions: CalendarOptions = {};
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  selectedDateText: string = Date.now().toLocaleString();
  showEventSlide: boolean = false;
  selectedEvent = { title: '', start: '', end: '' };
  events: any = [];

  constructor(private modalController: ModalController) {
    this.ngOnInit();
  }

  async openEventCreationModal() {
    const modal = await this.modalController.create({
      component: EventCreationPage,
      componentProps: {
        calendarComponent: this.calendarComponent,
      },
    });

    await modal.present();
  }

  ngOnInit() {
    this.loadFullCalendar();
  }

  loadFullCalendar() {
    this.selectedDateText = this.getCurrentFormattedDate();
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      initialView: 'timeGridWeek',
      events: [
        {
          title: 'Event 1',
          start: '2023-09-18T10:00:00',
          end: '2023-09-18T11:30:00',
        },
        {
          title: 'Event 2',
          start: '2023-09-18T14:00:00',
          end: '2023-09-18T15:30:00',
        },
      ],
      eventClick: this.handleEventClick.bind(this),
      editable: true,
      selectable: true,
      dateClick: this.handleDateClick.bind(this),
      // select: this.handleDateRangeSelect.bind(this),
      headerToolbar: false,
      customButtons: {
        customPrevButton: {
          text: 'Custom Prev',
          click: () => this.handleCustomButton('prev'),
        },
        customNextButton: {
          text: 'Custom Next',
          click: () => this.handleCustomButton('next'),
        },
      },
    };
  }

  handleEventClick(info: any) {
    this.selectedEvent = info.event;
    this.showEventSlide = true;
  }

  ngAfterViewInit() {
    this.calendarComponent.getApi().changeView(this.selectedView);
  }

  handleCustomButton(action: string) {
    if (this.selectedView === "timeGridWeek") {
      if (action === 'next') {
        this.calendarComponent.getApi().next();
      } else if (action === 'prev') {
        this.calendarComponent.getApi().prev();
      } else if (action === 'today') {
        this.calendarComponent.getApi().today();
      }
    } else {
      const calendarApi = this.calendarComponent.getApi();
      const currentView = calendarApi.view;
      const currentDate = currentView.currentStart;

      let newDate: Date;
      if (action === 'next') {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      } else if (action === 'prev') {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      } else {
        newDate = new Date();
      }
      console.log(newDate);
      this.calendarComponent.getApi().gotoDate(newDate);
    }
  
    const currentView = this.calendarComponent.getApi().view;
    const selectedDate = currentView.activeStart;
    const formattedDate = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
    this.selectedDateText = formattedDate;
  }
  

  handleDateClick(info: any) {
    this.selectedDateText = info.date.toLocaleString('default', {month: 'short', year: 'numeric', day: '2-digit'});
  }

  getCurrentFormattedDate(): string {
    const currentDate = new Date();
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  changeView () {
    this.calendarComponent.getApi().changeView(this.selectedView);
    console.log("change");
  }

  closeEventSlide() {
    this.showEventSlide = false;
  }
}