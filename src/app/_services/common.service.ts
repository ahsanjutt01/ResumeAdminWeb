import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { About } from '../_models/about';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
}
