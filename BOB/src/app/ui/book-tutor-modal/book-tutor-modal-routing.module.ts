import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTutorModalPage } from './book-tutor-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BookTutorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTutorModalPageRoutingModule {}
