/*import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};*/

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  /*canActivate(): boolean {
    const token = localStorage.getItem('authToken'); // à adapter selon ta logique

    if (token) {
      // L'utilisateur est déjà connecté → redirection vers le dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }

    // Pas connecté → accès autorisé
    return true;
  }*/

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}

