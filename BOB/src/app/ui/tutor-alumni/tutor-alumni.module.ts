import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorAlumniPageRoutingModule } from './tutor-alumni-routing.module';

import { TutorAlumniPage } from './tutor-alumni.page';
import { FooterComponentModule } from '../splash/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorAlumniPageRoutingModule,
    FooterComponentModule
  ],
  declarations: [TutorAlumniPage]
})
export class TutorAlumniPageModule {}
