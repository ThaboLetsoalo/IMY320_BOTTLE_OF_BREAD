import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'study-material',
    loadChildren: () => import('./study-material/study-material.module').then( m => m.StudyMaterialPageModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./schedules/schedules.module').then( m => m.SchedulesPageModule)
  },
  {
    path: 'tutor-alumni',
    loadChildren: () => import('./tutor-alumni/tutor-alumni.module').then( m => m.TutorAlumniPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'study-groups',
    loadChildren: () => import('./study-groups/study-groups.module').then( m => m.StudyGroupsPageModule)
  },
  {
    path: 'support-and-help',
    loadChildren: () => import('./support-and-help/support-and-help.module').then( m => m.SupportAndHelpPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
