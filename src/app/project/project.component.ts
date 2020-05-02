import { Component, OnInit } from '@angular/core';

import { Project } from '../_models/project';
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  projects: Project[];
  image;

  constructor(
    private commonService: CommonService,
  ) {
    this.resetProject();
  }

  ngOnInit() {
    this.getProjects();
  }
  resetProject() {
    this.project = new Project();
  }
  getProjects() {
    this.commonService.getProjects().subscribe((data: any) => {
      this.projects = data;
      this.resetProject();
      // this.profile.imageUrl !== null ? this.profile.imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
    }, error => {
      debugger;
    });
  }

  onSave() {
    // this.project.imageUrl = this.image;
    if (this.project.id === 0) {
        this.commonService.postProject(this.project).subscribe(data => {
          this.commonService.uploadProjectImage(this.image, data).subscribe(
          (res) => {
            this.getProjects();
          },
          (err) => {
            debugger;
          });
      }, error => {
        debugger;
      });
    } else {
      this.commonService.putProject(this.project).subscribe(data => {
        this.commonService.uploadProjectImage(this.image, this.project.id).subscribe(
          (res) => {
            this.getProjects();
          },
          (err) => {
            debugger;
          });
      },
      (err) => {
        debugger;
      });
    }
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.image = file;
    });

    reader.readAsDataURL(file);
  }
  onProjectRow(event, item: Project) {
    this.project = item;
  }
  onDeleteProject() {
    if (this.project.id === 0) { return; }
    this.commonService.deleteProject(this.project.id).subscribe(data => {
      this.getProjects();
    }, error => {
      debugger;
    });
  }
}
