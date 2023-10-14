import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BookTutorModalPageRoutingModule } from './book-tutor-modal-routing.module';

import { BookTutorModalPage } from './book-tutor-modal.page';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
// import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTutorModalPageRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    // NgFor,
    // FormControl,
  ],
  declarations: [BookTutorModalPage]
})
export class BookTutorModalPageModule {}