import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
        this.toastr.success('Save successfully!');
        this.getWork();
      }, error => {
        this.toastr.error('Please fill all the fields!');
      });
    } else {
      this.commonService.putWork(this.work).subscribe(data => {
        this.toastr.success('Save successfully!');
        this.getWork();
      }, error => {
        this.toastr.error('Please fill all the fields!');
      });
    }
  }

  getWork() {
    this.commonService.getWork().subscribe((data: any) => {
      this.resetWork();
      this.works = data;
    }, error => {
      this.toastr.error('Unable to get work!');
    });
  }
  onWorkRow(event, work: Work) {
    this.work = {...work};
  }
  onDelete = () => {
    this.commonService.deleteWork(this.work.id).subscribe((data: any) => {
      this.resetWork();
      this.toastr.success('Save successfully!');
      this.getWork();
    }, error => {
      this.toastr.error('Unable to delete work!');
    });
  }

}
