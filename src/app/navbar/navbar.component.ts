import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  isLogedIn() {
    return this.authService.isLogedIn();
  }
  onLogout() {
    localStorage.removeItem('userInfo');
    this.router.navigateByUrl('login');
    this.isLogedIn();
  }
}
