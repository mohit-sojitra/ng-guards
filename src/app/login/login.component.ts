import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router) {}

  canLoadLoginHandler(): void {
    if (this.email === 'test@test.com') {
      localStorage.setItem('email', this.email);
      this.router.navigate(['/homepage']);
    }
  }
  canActivateLoginHandler(): void {
    if (this.email === 'test@test.com') {
      localStorage.setItem('email', this.email);
      this.router.navigate(['/homepage2']);
    }
  }
}
