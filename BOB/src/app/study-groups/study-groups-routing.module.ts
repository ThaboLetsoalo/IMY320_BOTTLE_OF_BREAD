import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyGroupsPage } from './study-groups.page';

const routes: Routes = [
  {
    path: '',
    component: StudyGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyGroupsPageRoutingModule {}
