import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { About } from '../_models/about';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { Work } from '../_models/work';
import { Education } from '../_models/education';
import { Skill } from '../_models/skill';
import { Profile } from '../_models/profile';

import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // private API_URL = 'http://localhost:4900';
  private API_URL = 'https://resume-server-app.herokuapp.com';
  options: any;
  userInfo;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAuth() {
    this.userInfo  = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo) {
      const headers = new HttpHeaders({
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'Content-Type': 'application/json',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization': `bearer ${this.userInfo.token}` });
        // tslint:disable-next-line: object-literal-shorthand
      this.options = { headers: headers };
    }
    return this.options;
  }
  postAbout(body: About) {
    return this.http.post(`${this.API_URL}/about/postAbout`, body, this.getAuth());
  }
  getAbout() {
      return this.http.get(`${this.API_URL}/about/getAbout`, this.getAuth());
  }
  putAbout(body: About) {
    return this.http.put(`${this.API_URL}/about/updateAbout`, body, this.getAuth());
  }


  // =========================WORK=======================================
  getWork() {
      return this.http.get(`${this.API_URL}/work/getWork`, this.getAuth());
  }
  postWork(body: Work) {
    return this.http.post(`${this.API_URL}/work/postWork`, body, this.getAuth());
  }
  putWork(body: Work) {
    return this.http.put(`${this.API_URL}/work/updateWork`, body, this.getAuth());
  }
  deleteWork(id: number) {
    return this.http.delete(`${this.API_URL}/work/deleteWorkById/${id}`, this.getAuth());
  }
  // =========================END WORK=======================================

  // =========================EDUCATION=======================================
  getEducation() {
      return this.http.get(`${this.API_URL}/edu/getEducation`, this.getAuth());
  }
  postEducation(body: Education) {
    return this.http.post(`${this.API_URL}/edu/postEducation`, body, this.getAuth());
  }
  putEducation(body: Education) {
    return this.http.put(`${this.API_URL}/edu/updateEducation`, body, this.getAuth());
  }
  deleteEducation(id: number) {
    return this.http.delete(`${this.API_URL}/edu/deleteEducationById/${id}`, this.getAuth());
  }
  // =========================END EDUCATION=======================================

  // =========================SKILL=======================================
  getSkill() {
      return this.http.get(`${this.API_URL}/skill/getSkill`, this.getAuth());
  }
  postSkill(body: Skill) {
    return this.http.post(`${this.API_URL}/skill/postSkill`, body, this.getAuth());
  }
  putSkill(body: Skill) {
    return this.http.put(`${this.API_URL}/skill/updateSkill`, body, this.getAuth());
  }
  deleteSkill(id: number) {
    return this.http.delete(`${this.API_URL}/skill/deleteSkillById/${id}`, this.getAuth());
  }
  // =========================END SKILL=======================================

  // =========================Get Contacts=======================================
  getMessages() {
      return this.http.get(`${this.API_URL}/contact/getContacts`, this.getAuth());
  }
  // =========================END Contacts=======================================

  // =========================Get PROFILE=======================================
  getProfile() {
      return this.http.get(`${this.API_URL}/getProfile`, this.getAuth());
  }
  // updateUser
  putProfile(body: Profile) {
    return this.http.put(`${this.API_URL}/updateUser`, body, this.getAuth());
  }
  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('imageUrl', image);

    return this.http.put(`${this.API_URL}/image/profileImageUpload`, formData, this.getAuth());
  }
  // =========================END PROFILE=======================================

  // =========================START PROJECT=======================================

  postProject(body: Project) {
    return this.http.post(`${this.API_URL}/project/postProject`, body, this.getAuth());
  }
  getProjects() {
      return this.http.get(`${this.API_URL}/project/getProjects`, this.getAuth());
  }
  // updateUser
  putProject(body: Project) {
    return this.http.put(`${this.API_URL}/project/updateProject`, body, this.getAuth());
  }
  uploadProjectImage(image: File, id: any) {
    const formData = new FormData();

    formData.append('imageUrl', image);

    return this.http.put(`${this.API_URL}/image/projectImageUpload/${id}`, formData, this.getAuth());
  }
  deleteProject(id: number) {
    return this.http.delete(`${this.API_URL}/project/deleteProjectById/${id}`, this.getAuth());
  }
}
