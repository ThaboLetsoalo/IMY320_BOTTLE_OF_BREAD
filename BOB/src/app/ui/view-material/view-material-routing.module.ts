import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMaterialPage } from './view-material.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMaterialPageRoutingModule {}
