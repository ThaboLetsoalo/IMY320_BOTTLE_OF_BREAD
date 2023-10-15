import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyMaterialPageRoutingModule } from './study-material-routing.module';

import { StudyMaterialPage } from './study-material.page';
import { FooterComponentModule } from '../splash/footer/footer.module';
import { StudyMaterialSkeletonComponent } from './study-material-skeleton/study-material-skeleton.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyMaterialPageRoutingModule,
    FooterComponentModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [StudyMaterialPage, StudyMaterialSkeletonComponent]
})
export class StudyMaterialPageModule {}
