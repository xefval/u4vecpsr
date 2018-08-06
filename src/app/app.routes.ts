import { Route } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { Page404Component } from './core/page404/page404.component';
import { CanActivateGuard } from './users/can-activate';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [CanActivateGuard],
    data: { breadcrumb: 'Courses' }
  },
  {
    path: 'courses/:id',
    component: CreateCourseComponent,
    canActivate: [CanActivateGuard],
    data: { breadcrumb: 'Edit course' }
  },
  {
    path: 'courses/new',
    component: CreateCourseComponent,
    canActivate: [CanActivateGuard],
    data: { breadcrumb: 'New course' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { breadcrumb: 'Login' }
  },
  {
    path: '**',
    component: Page404Component,
    data: { breadcrumb: 'Page not found' }
  }
];
