import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLogInSubmit() {
    this.authService.login(this.model).subscribe(data => {
      this.router.navigateByUrl('');
    }, error => {
      console.log('error', error);
      debugger;
    });
  }
}
