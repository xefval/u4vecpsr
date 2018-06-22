import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { VideoDirationPipe } from './video-duration.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesListComponent,
    VideoDirationPipe
  ]
})
export class CoursesModule { }
