import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPickerPage } from './calendar-picker.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPickerPageRoutingModule {}
