import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SchedulesPageRoutingModule } from './schedules-routing.module';

import { SchedulesPage } from './schedules.page';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    IonicModule,
    SchedulesPageRoutingModule,
    FullCalendarModule
  ],
  declarations: [SchedulesPage]
})
export class SchedulesPageModule {}

