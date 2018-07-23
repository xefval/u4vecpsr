import { Route } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';

export const ROUTES: Route[] = [
  { path: 'add', component: CreateCourseComponent },
  { path: 'list', component: CoursesListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
