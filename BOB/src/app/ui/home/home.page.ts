import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quickAccess: string[] = ["Study Materials","Tutorials","Study Groups"]

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

}