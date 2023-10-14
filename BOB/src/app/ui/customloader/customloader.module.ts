import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomloaderPageRoutingModule } from './customloader-routing.module';

import { CustomloaderPage } from './customloader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomloaderPageRoutingModule
  ],
  declarations: [CustomloaderPage]
})
export class CustomloaderPageModule {}
