import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  public userInfo: any;

  constructor(
    public authService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.getUserInfo().subscribe(
        x => this.userInfo = x
      );
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
