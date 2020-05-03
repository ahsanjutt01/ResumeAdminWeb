import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Education } from '../_models/education';

// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education;
  educations: Education[];
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
    this.resetEducation();
  }

  ngOnInit() {
    this.getEducation();
  }

  resetEducation = () => { this.education = new Education(); };

  onSave() {
    this.education.from = this.education.isCurrently ? null : this.education.from;
    if (this.education.id === 0) {
      this.commonService.postEducation(this.education).subscribe(data => {
        this.toastr.success('Save successfully!');
        this.getEducation();
      }, error => {
        this.toastr.error('Please fill all the fields!');
      });
    } else {
      this.commonService.putEducation(this.education).subscribe(data => {
        this.toastr.success('Save successfully!');
        this.getEducation();
      }, error => {
        this.toastr.error('Please fill all the fields!');
      });
    }
  }

  getEducation() {
    this.commonService.getEducation().subscribe((data: any) => {
      this.resetEducation();
      this.educations = data;
    }, error => {
      this.toastr.error('Unable to get education!');
    });
  }
  onEducationRow(event, education: Education) {
    this.education = {...education};
  }
  onDelete = () => {
    this.commonService.deleteEducation(this.education.id).subscribe((data: any) => {
      this.resetEducation();
      this.toastr.success('Delete successfully!');
      this.getEducation();
    }, error => {
      this.toastr.error('Unable to delete education!');
    });
  }

}
