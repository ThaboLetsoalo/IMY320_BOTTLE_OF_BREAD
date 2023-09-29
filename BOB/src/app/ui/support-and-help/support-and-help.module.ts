import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportAndHelpPageRoutingModule } from './support-and-help-routing.module';

import { SupportAndHelpPage } from './support-and-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportAndHelpPageRoutingModule
  ],
  declarations: [SupportAndHelpPage]
})
export class SupportAndHelpPageModule {}
