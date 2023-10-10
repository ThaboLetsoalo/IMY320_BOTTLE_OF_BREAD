import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyMaterialPageRoutingModule } from './study-material-routing.module';

import { StudyMaterialPage } from './study-material.page';
import { FooterComponentModule } from '../splash/footer/footer.module';
import { StudyMaterialSkeletonComponent } from './study-material-skeleton/study-material-skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyMaterialPageRoutingModule,
    FooterComponentModule
  ],
  declarations: [StudyMaterialPage, StudyMaterialSkeletonComponent]
})
export class StudyMaterialPageModule {}
