import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { VideoDurationPipe } from './video-duration.pipe';
import { CourseComponent } from './course/course.component';
import { CourseBorderDirective } from './course-border.directive';
import { DlgConfirmComponent } from './dlg-confirm/dlg-confirm.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DateInputComponent } from './date-input/date-input.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { OrderByPipe } from './order-by.pipe';
import { FilterCoursesPipe } from './filter-courses.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    CoursesListComponent,
    VideoDurationPipe,
    CourseComponent,
    CourseBorderDirective,
    OrderByPipe,
    FilterCoursesPipe,
    DlgConfirmComponent,
    CreateCourseComponent,
    DateInputComponent,
    DurationInputComponent
  ],
  providers: [
  ],
  bootstrap: [DlgConfirmComponent]
})
export class CoursesModule { }
