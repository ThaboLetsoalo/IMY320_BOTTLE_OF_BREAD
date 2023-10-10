import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./ui/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./ui/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./ui/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./ui/splash/splash.module').then( m => m.SplashPageModule)
  },  {
    path: 'calendar-picker',
    loadChildren: () => import('./ui/calendar-picker/calendar-picker.module').then( m => m.CalendarPickerPageModule)
  },
  {
    path: 'booking-popup',
    loadChildren: () => import('./ui/booking-popup/booking-popup.module').then( m => m.BookingPopupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
