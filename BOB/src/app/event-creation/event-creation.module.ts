import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCreationPageRoutingModule } from './event-creation-routing.module';

import { EventCreationPage } from './event-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventCreationPageRoutingModule
  ],
  declarations: [EventCreationPage]
})
export class EventCreationPageModule {}
