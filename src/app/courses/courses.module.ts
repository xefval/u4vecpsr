import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { VideoDurationPipe } from './video-duration.pipe';
import { CourseComponent } from './course/course.component';
import { CourseBorderDirective } from './course-border.directive';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';
import { FilterCoursesPipe } from './filter-courses.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DlgConfirmComponent } from './dlg-confirm/dlg-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesListComponent,
    VideoDurationPipe,
    CourseComponent,
    CourseBorderDirective,
    OrderByPipe,
    FilterCoursesPipe,
    DlgConfirmComponent
  ],
  bootstrap: [DlgConfirmComponent]
})
export class CoursesModule { }
