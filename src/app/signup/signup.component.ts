import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService as SocialAuth, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

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
  loggedIn = false;
  private user: SocialUser;
  isError = false;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private authSocial: SocialAuth
  ) {
  }

  ngOnInit() {
    this.authSocial.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
  onSignInSubmit() {
    this.authService.signup(this.signup).subscribe(data => {
      this.toastr.success('Signup successfully!');
      this.router.navigateByUrl('/login');
    }, error => {
      this.toastr.error('Please enter valid fields!');
    });
  }
  signInWithFB(): void {
    debugger;
    this.authSocial.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => {
      console.log(x);
     });
  }
  signInWithGoogle(): void {
    debugger;
    this.authSocial.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
       console.log(x);
      });
  }
  signOut(): void {
    this.authSocial.signOut();
  }

}
