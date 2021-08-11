import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'All about angular guards';
  email: string;
  password: string;

  constructor(private router: Router) {}

  canLoadLoginHandler(): void {
    if (this.email === 'test@test.com') {
      this.router.navigate(['/homepage']);
    }
  }
}
