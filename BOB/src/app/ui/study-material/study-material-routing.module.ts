import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyMaterialPage } from './study-material.page';

const routes: Routes = [
  {
    path: '',
    component: StudyMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyMaterialPageRoutingModule {}
