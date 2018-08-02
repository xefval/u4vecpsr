import { Route } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { Page404Component } from './core/page404/page404.component';
import { CanActivateGuard } from './users/can-activate';

export const ROUTES: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'courses/:id',
    component: CreateCourseComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'courses/new',
    component: CreateCourseComponent,
    canActivate: [CanActivateGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Page404Component }
];
