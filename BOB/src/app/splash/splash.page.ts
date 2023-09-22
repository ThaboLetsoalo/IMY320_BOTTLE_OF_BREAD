import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {


  ngOnInit() {
  }
  constructor(private router: Router) { }

  navigateToDashboard() {
    this.router.navigate(['/home/dashboard']);
  }

}
