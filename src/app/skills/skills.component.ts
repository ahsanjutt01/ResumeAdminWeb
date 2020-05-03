import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Skill } from '../_models/skill';

// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill;
  skills: Skill[];
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
    this.resetSkill();
  }

  ngOnInit() {
    this.getSkill();
  }

  resetSkill = () => { this.skill = new Skill(); };

  onSave() {
    if (this.skill.id === 0) {
      this.commonService.postSkill(this.skill).subscribe(data => {
        this.toastr.success('Save successfull!');
        this.getSkill();
      }, error => {
        this.toastr.error('Please fill all the fields');
      });
    } else {
      this.commonService.putSkill(this.skill).subscribe(data => {
        this.toastr.success('Save successfull!');
        this.getSkill();
      }, error => {
        this.toastr.error('Please fill all the fields');
      });
    }
  }

  getSkill() {
    this.commonService.getSkill().subscribe((data: any) => {
      this.resetSkill();
      this.skills = data;
    }, error => {
      this.toastr.error('Unable to get Skills');
    });
  }
  onSkillRow(event, skill: Skill) {
    this.skill = {...skill};
  }
  onDelete = () => {
    this.commonService.deleteSkill(this.skill.id).subscribe((data: any) => {
      this.resetSkill();
      this.toastr.success('Delete successfull!');
      this.getSkill();
    }, error => {
      this.toastr.error('Error in Deleteing skill');
    });
  }

}
