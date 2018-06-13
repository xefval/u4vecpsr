import { Route } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { VideoListComponent } from './video-list/video-list/video-list.component';

export const ROUTES: Route[] = [
  { path: 'list', component: VideoListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]; 