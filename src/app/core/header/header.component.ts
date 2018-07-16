import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from '../../users/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(private authService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    if (this.authService.logout()) {
      this.router.navigate(['login']);
    }
  }
}
