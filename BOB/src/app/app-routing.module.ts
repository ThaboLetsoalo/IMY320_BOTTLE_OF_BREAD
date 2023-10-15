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
  },
  {
    path: 'book-tutor-modal',
    loadChildren: () => import('./ui/book-tutor-modal/book-tutor-modal.module').then( m => m.BookTutorModalPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./ui/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'customloader',
    loadChildren: () => import('./ui/customloader/customloader.module').then( m => m.CustomloaderPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./ui/about/about.module').then( m => m.AboutPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
