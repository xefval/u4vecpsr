import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './users/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(public authService: AuthorizationService) {
    this.title = '';
  }

  ngOnInit() {
    this.title = 'Videocourses';
  }
}
