import { Route } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';

export const ROUTES: Route[] = [
  { path: 'add', component: CreateCourseComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: CoursesListComponent },
  { path: 'courses/new', component: CoursesListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];
