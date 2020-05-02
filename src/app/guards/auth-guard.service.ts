import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
   }
  canActivate(): boolean {

    if (this.authService.isLogedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
