import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  image;
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
    this.profile = new Profile();
  }

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    this.commonService.getProfile().subscribe((data: any) => {
      this.profile = data;
    }, error => {
      this.toastr.error('Unable to Load Profile!');
    });
  }

  onSave() {
    this.commonService.putProfile(this.profile).subscribe(data => {
      this.toastr.success('Save successfully!');
      this.getProfile();
    }, error => {
      this.toastr.error('Unable to save profile!');
    });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.image = file;

      this.commonService.uploadImage(this.image).subscribe(
        (res) => {
          this.toastr.success('Profile image saved!');
          this.getProfile();
        },
        (err) => {
          this.toastr.error('Unable to save profile image!');
        });
    });

    reader.readAsDataURL(file);
  }
}
