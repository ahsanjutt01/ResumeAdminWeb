import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  onLogInSubmit() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(data => {
      this.toastr.success('Login successfully!');
      this.router.navigateByUrl('');
    }, error => {
      this.toastr.error('Email or Password is incorrect!');
    });
  }
}
