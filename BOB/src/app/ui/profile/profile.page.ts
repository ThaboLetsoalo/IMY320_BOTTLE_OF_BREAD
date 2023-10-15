import { ProfileService } from 'src/app/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/modals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile!: IProfile;
  showProfile = false;
  valuesChanged = false;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe((response)=>{
      if(response) {
        this.profile = response;
        this.showProfile = true;
      }
    })
  }

  isChange() {
    this.valuesChanged = true;
  }

  onFileSelected(event: any) {
   this.isChange();
    const file: File = event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.profile.profileURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  selectFile() {
    document.getElementById('GroupProfileImgInput')?.click();
  }

  edit() {
    this.profileService.editProfile(this.profile);
    this.valuesChanged = false;
  }

}
