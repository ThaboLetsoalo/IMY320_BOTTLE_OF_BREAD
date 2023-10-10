import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTutorModalPageRoutingModule } from './book-tutor-modal-routing.module';

import { BookTutorModalPage } from './book-tutor-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTutorModalPageRoutingModule
  ],
  declarations: [BookTutorModalPage]
})
export class BookTutorModalPageModule {}
