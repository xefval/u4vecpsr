import { Route } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { Page404Component } from './core/page404/page404.component';
import { CanActivateGuard } from './auth/auth.guard';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'courses',
    data: { breadcrumb: 'Courses' },
    children: [
      {
        path: '',
        component: CoursesListComponent,
        canActivate: [CanActivateGuard],
        data: { breadcrumb: 'Courses list' },
      },
      {
        path: ':id',
        component: CreateCourseComponent,
        canActivate: [CanActivateGuard],
        data: { breadcrumb: 'Edit course' }
      },
      {
        path: 'new',
        component: CreateCourseComponent,
        canActivate: [CanActivateGuard],
        data: { breadcrumb: 'New course' }
      },
    ]
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
