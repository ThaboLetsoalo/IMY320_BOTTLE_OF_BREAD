import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPickerPageRoutingModule } from './calendar-picker-routing.module';

import { CalendarPickerPage } from './calendar-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPickerPageRoutingModule
  ],
  declarations: [CalendarPickerPage]
})
export class CalendarPickerPageModule {}
