import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private API_URL = 'http://localhost:4900';
  private API_URL = 'https://resume-server-app.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  signup(body: any) {
    return this.http.post(`${this.API_URL}/signup`, body);
  }
  login(user: any) {
    return this.http.post(`${this.API_URL}/login`, user).pipe( map(res => {
      const data = JSON.stringify(res);
      localStorage.setItem('userInfo', data);
      return data;
     }));
 }
 isLogedIn(): boolean {
  const helper = new JwtHelperService();
  const userInfo =  JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
        const isExpired = !helper.isTokenExpired(userInfo.token);
        return isExpired;
    } else {
      return false;
    }
  }
}
