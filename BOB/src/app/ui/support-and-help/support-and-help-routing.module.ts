import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportAndHelpPage } from './support-and-help.page';

const routes: Routes = [
  {
    path: '',
    component: SupportAndHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportAndHelpPageRoutingModule {}
