import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'study-material',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'study-material',
        loadChildren: () => import('../study-material/study-material.module').then( m => m.StudyMaterialPageModule)
      },
      {
        path: 'schedules',
        loadChildren: () => import('../schedules/schedules.module').then( m => m.SchedulesPageModule)
      },
      {
        path: 'tutor-alumni',
        loadChildren: () => import('../tutor-alumni/tutor-alumni.module').then( m => m.TutorAlumniPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'study-groups',
        loadChildren: () => import('../study-groups/study-groups.module').then( m => m.StudyGroupsPageModule)
      },
      {
        path: 'support-and-help',
        loadChildren: () => import('../support-and-help/support-and-help.module').then( m => m.SupportAndHelpPageModule)
      },
      {
        path: 'event-creation',
        loadChildren: () => import('../event-creation/event-creation.module').then( m => m.EventCreationPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
