import { Component, OnInit } from '@angular/core';

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
    ) {
      this.about =  new About();
    }

  ngOnInit() {
    this.getAbout();
  }
  onSave() {
    if (this.about.id === 0) {
      this.commonService.postAbout(this.about).subscribe(data => {
        console.log(data);
      }, error => {
        debugger;
      });
    } else {
      this.commonService.putAbout(this.about).subscribe(data => {
      }, error => {
        debugger;
      });
    }
  }

  getAbout() {
    this.commonService.getAbout().subscribe((data: any) => {
      this.about = data;
    }, error => {
      debugger;
    });
  }
}
