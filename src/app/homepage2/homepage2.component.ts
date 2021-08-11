import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.scss'],
})
export class Homepage2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
