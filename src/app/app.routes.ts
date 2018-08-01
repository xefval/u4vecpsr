import { Route } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { Page404Component } from './core/page404/page404.component';

export const ROUTES: Route[] = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: CoursesListComponent },
  { path: 'courses/new', component: CoursesListComponent },
  { path: 'add', component: CreateCourseComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Page404Component }
];
