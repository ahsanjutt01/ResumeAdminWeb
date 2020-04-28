import { Component, OnInit } from '@angular/core';

import { Work } from '../_models/work';

// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  work: Work;
  works: Work[];
  constructor(
    private commonService: CommonService,
  ) {
    this.resetWork();
  }

  ngOnInit() {
    this.getWork();
  }

  resetWork = () => { this.work = new Work(); };

  onSave() {
    if (this.work.id === 0) {
      this.commonService.postWork(this.work).subscribe(data => {
        this.getWork();
      }, error => {
        debugger;
      });
    } else {
      this.commonService.putWork(this.work).subscribe(data => {
        this.getWork();
      }, error => {
        debugger;
      });
    }
  }

  getWork() {
    this.commonService.getWork().subscribe((data: any) => {
      this.resetWork();
      this.works = data;
    }, error => {
      debugger;
    });
  }
  onWorkRow(event, work: Work) {
    this.work = {...work};
  }
  onDelete = () => {
    this.commonService.deleteWork(this.work.id).subscribe((data: any) => {
      this.resetWork();
      this.getWork();
    }, error => {
      debugger;
    });
  }

}
