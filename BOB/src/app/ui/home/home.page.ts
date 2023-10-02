import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/modals';
import { ProfileService } from 'src/app/services/profile.service';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quickAccess: string[] = ["Study Materials","Tutorials","Study Groups"]
  showProfile: boolean = false;
  userId: string = '';
  profile$!: Observable<IProfile>;

  constructor(private menuController: MenuController, private profileService: ProfileService) {}

  ngOnInit() {
    this.initiate();
  }

  async initiate() {
    const userId = await this.profileService.getCurrentUserId();
    if(userId) {
      this.userId = userId;
      this.showProfile = true;
      console.log(this.userId);
    }
  }

}
