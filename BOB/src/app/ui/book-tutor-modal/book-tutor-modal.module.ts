import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTutorModalPageRoutingModule } from './book-tutor-modal-routing.module';

import { BookTutorModalPage } from './book-tutor-modal.page';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatNativeDateModule,
    BookTutorModalPageRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
  ],
  declarations: [BookTutorModalPage]
})
export class BookTutorModalPageModule {}