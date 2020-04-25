import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAgreeTerms: true
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }
  onSignInSubmit() {
    this.authService.signup(this.signup).subscribe(data => {
      this.router.navigateByUrl('/login');
    }, error => {
      console.log('error', error);
      debugger;
    });
  }
}
