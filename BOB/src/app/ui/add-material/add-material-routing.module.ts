import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMaterialPage } from './add-material.page';

const routes: Routes = [
  {
    path: '',
    component: AddMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMaterialPageRoutingModule {}
