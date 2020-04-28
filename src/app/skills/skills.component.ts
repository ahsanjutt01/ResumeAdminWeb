import { Component, OnInit } from '@angular/core';

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
        this.getSkill();
      }, error => {
        debugger;
      });
    } else {
      this.commonService.putSkill(this.skill).subscribe(data => {
        this.getSkill();
      }, error => {
        debugger;
      });
    }
  }

  getSkill() {
    this.commonService.getSkill().subscribe((data: any) => {
      this.resetSkill();
      this.skills = data;
    }, error => {
      debugger;
    });
  }
  onSkillRow(event, skill: Skill) {
    this.skill = {...skill};
  }
  onDelete = () => {
    this.commonService.deleteSkill(this.skill.id).subscribe((data: any) => {
      this.resetSkill();
      this.getSkill();
    }, error => {
      debugger;
    });
  }

}
