import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorAlumniPageRoutingModule } from './tutor-alumni-routing.module';

import { TutorAlumniPage } from './tutor-alumni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorAlumniPageRoutingModule
  ],
  declarations: [TutorAlumniPage]
})
export class TutorAlumniPageModule {}
