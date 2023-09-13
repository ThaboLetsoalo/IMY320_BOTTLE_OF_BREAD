import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyGroupsPageRoutingModule } from './study-groups-routing.module';

import { StudyGroupsPage } from './study-groups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyGroupsPageRoutingModule
  ],
  declarations: [StudyGroupsPage]
})
export class StudyGroupsPageModule {}
