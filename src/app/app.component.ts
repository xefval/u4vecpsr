import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './users/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(public authService: AuthorizationService, private router: Router) {
    this.title = '';
  }

  ngOnInit() {
    this.title = 'Videocourses';

    if (this.authService.isAuthenticated()) {
      this.router.navigate(['list']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
