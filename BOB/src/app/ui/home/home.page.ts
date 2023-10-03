import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/modals';
import { AuthService } from 'src/app/services/auth.service';
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
  profile!: IProfile;

  constructor(private menuController: MenuController, private profileService: ProfileService, private authService: AuthService) {}

  ngOnInit() {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.profileService.getProfile().subscribe((profile: any) => {
          if (profile.userId) {
            this.showProfile = true;
            this.profile = profile;
            console.log(profile);
          }
        });
      } else {
        this.showProfile = false;
      }
    })
  }

  signOut() {
    this.authService.logout();
    this.showProfile = false;
  }
}
