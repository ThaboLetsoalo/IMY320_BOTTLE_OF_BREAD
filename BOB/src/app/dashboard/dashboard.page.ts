import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  quickAccess: string[] = ["Study Materials","Tutorials","Study Groups"]
  currentTime: string = '00:00:00';
  currentDate: string = 'YYYY-MM-DD';
  private timerSubscription!: Subscription;

  constructor() { }

  ngOnInit() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateTimeAndDate();
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  updateTimeAndDate() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    this.currentTime = `${hours}:${minutes}:${seconds}`;
    this.currentDate = now.toLocaleString('default', {day: '2-digit', month: 'short', year: 'numeric',weekday: "long" });
    
  }
}
