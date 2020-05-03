import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  isError = false;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }
  onSignInSubmit() {
    this.authService.signup(this.signup).subscribe(data => {
      this.toastr.success('Signup successfully!');
      this.router.navigateByUrl('/login');
    }, error => {
      this.toastr.error('Please enter valid fields!');
    });
  }
}
