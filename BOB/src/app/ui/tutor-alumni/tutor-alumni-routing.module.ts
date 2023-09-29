import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorAlumniPage } from './tutor-alumni.page';

const routes: Routes = [
  {
    path: '',
    component: TutorAlumniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorAlumniPageRoutingModule {}
