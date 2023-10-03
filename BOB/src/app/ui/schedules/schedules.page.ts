import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventCreationPage } from '../event-creation/event-creation.page';
import { ModalController } from '@ionic/angular';
import { SchedulesService } from 'src/app/services/schedules.service';
import { ISchedule } from 'src/app/modals/schedule.model';
import { tap } from 'rxjs';

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
  schedules: ISchedule[] = [];

  constructor(private modalController: ModalController, private scheduleServices: SchedulesService) {
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
      events: [],
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
    this.scheduleServices.getSchedules('WIL08nbvTXU94c8G6XQtNy1R8nt1').pipe(tap((schedules)=>{
      this.schedules = schedules;
      this.addEvents();
    })).subscribe();
  }

  addEvents() {
    this.calendarComponent.getApi().removeAllEvents();
    this.schedules.forEach((schedule)=>{
      const start = schedule.startDate.toDate();
      const end = schedule.endDate.toDate()
      const event = {
        title: schedule.title,
        start: this.getMinDate(start)+'T'+this.getMinTime(start),
        end: this.getMinDate(end)+'T'+this.getMinTime(end),
      }
      this.calendarComponent.getApi().addEvent(event);
    })
  }

  getMinTime(date: Date): string {
    const currentDate = date;
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = (currentDate.getMinutes()).toString().padStart(2, '0'); //time in ten minutes;

    return `${currentHour}:${currentMinute}`;
  }
  
  getMinDate(date: Date): string {
    const currentDate = date;
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    return `${currentYear}-${currentMonth}-${currentDay}`;
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