import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { About } from '../_models/about';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Work } from '../_models/work';
import { Education } from '../_models/education';
import { Skill } from '../_models/skill';
import { Profile } from '../_models/profile';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private API_URL = 'https://resume-server-app.herokuapp.com';
  options: any;
  token;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.token  = JSON.parse(localStorage.getItem('userInfo'));
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
    'Authorization': `bearer ${this.token.token}` });
    // tslint:disable-next-line: object-literal-shorthand
    this.options = { headers: headers };
  }

  postAbout(body: About) {
    return this.http.post(`${this.API_URL}/about/postAbout`, body, this.options);
  }
  getAbout() {
    if (this.token) {
      return this.http.get(`${this.API_URL}/about/getAbout`, this.options);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  putAbout(body: About) {
    return this.http.put(`${this.API_URL}/about/updateAbout`, body, this.options);
  }


  // =========================WORK=======================================
  getWork() {
    if (this.token) {
      return this.http.get(`${this.API_URL}/work/getWork`, this.options);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  postWork(body: Work) {
    return this.http.post(`${this.API_URL}/work/postWork`, body, this.options);
  }
  putWork(body: Work) {
    return this.http.put(`${this.API_URL}/work/updateWork`, body, this.options);
  }
  deleteWork(id: number) {
    return this.http.delete(`${this.API_URL}/work/deleteWorkById/${id}`, this.options);
  }
  // =========================END WORK=======================================

  // =========================EDUCATION=======================================
  getEducation() {
    if (this.token) {
      return this.http.get(`${this.API_URL}/edu/getEducation`, this.options);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  postEducation(body: Education) {
    return this.http.post(`${this.API_URL}/edu/postEducation`, body, this.options);
  }
  putEducation(body: Education) {
    return this.http.put(`${this.API_URL}/edu/updateEducation`, body, this.options);
  }
  deleteEducation(id: number) {
    return this.http.delete(`${this.API_URL}/edu/deleteEducationById/${id}`, this.options);
  }
  // =========================END EDUCATION=======================================

  // =========================SKILL=======================================
  getSkill() {
    if (this.token) {
      return this.http.get(`${this.API_URL}/skill/getSkill`, this.options);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  postSkill(body: Skill) {
    return this.http.post(`${this.API_URL}/skill/postSkill`, body, this.options);
  }
  putSkill(body: Skill) {
    return this.http.put(`${this.API_URL}/skill/updateSkill`, body, this.options);
  }
  deleteSkill(id: number) {
    return this.http.delete(`${this.API_URL}/skill/deleteSkillById/${id}`, this.options);
  }
  // =========================END SKILL=======================================

  // =========================Get Contacts=======================================
  getMessages() {
    if (this.token) {
      return this.http.get(`${this.API_URL}/contact/getContacts`, this.options);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  // =========================END Contacts=======================================

  // =========================Get PROFILE=======================================
  getProfile() {
    if (this.token) {
      return this.http.get(`${this.API_URL}/getProfile`, this.options);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  // updateUser
  putProfile(body: Profile) {
    return this.http.put(`${this.API_URL}/updateUser`, body, this.options);
  }
  // =========================END PROFILE=======================================
}
