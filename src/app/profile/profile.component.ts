import { Component, OnInit } from '@angular/core';

import { Profile } from '../_models/profile';

// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  constructor(
    private commonService: CommonService,
  ) { 
    this.profile = new Profile();
  }

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    this.commonService.getProfile().subscribe((data: any) => {
      this.profile = data;
      // this.profile.imageUrl !== null ? this.profile.imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'; 
    }, error => {
      debugger;
    });
  }

  onSave() {
    this.commonService.putProfile(this.profile).subscribe(data => {
      this.getProfile();
    }, error => {
      debugger;
    });
  }
}
