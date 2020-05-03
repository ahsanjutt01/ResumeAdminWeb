import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Models
import { About } from '../_models/about';

// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About;
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService
    ) {
      this.about =  new About();
    }

  ngOnInit() {
    this.getAbout();
  }
  onSave() {
    if (this.about.id === 0) {
      this.commonService.postAbout(this.about).subscribe(data => {
        this.toastr.success('Save successfully!');
      }, error => {
        this.toastr.error('Please fill the field!');
      });
    } else {
      this.commonService.putAbout(this.about).subscribe(data => {
        this.toastr.success('Save successfully!');
      }, error => {
        this.toastr.error('Please fill the field!');
      });
    }
  }

  getAbout() {
    this.commonService.getAbout().subscribe((data: any) => {
      if (data) {
        this.about = data;
      }
    }, error => {
      this.toastr.error('Unable to get about');
    });
  }
}
