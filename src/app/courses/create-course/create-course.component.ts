import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses-provider.service';
import { CourseItem } from '../course-item';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit {
  public course: CourseItem;
  private createFlag: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    /* this.course = new CourseItem(0, '', new Date(), 60, 'Course');
    this.createFlag = false;

    this.route.params.subscribe((data) => {
      const courseId = parseInt(data['id'], 10);

      if (!isNaN(courseId) && courseId > 0) {
        this.coursesService.getCourseById(+courseId).subscribe(
          response => this.course = response
        );
      } else {
        this.createFlag = true;
        this.coursesService.getCoursesList().subscribe(
          items => {
            const id = items.reduce((val, course) => {
              return Math.max(val, course.id);
            }, 0);
            this.course = new CourseItem(id + 1, '', new Date(), 60, 'Course');
          }
        );
      }
    }); */
  }

  saveCourse(): void {
    if (this.createFlag) {
/*       this.coursesService.createCourse(this.course).subscribe(
        () => this.router.navigate(['courses'])
      ); */
    } else {
/*       this.coursesService.putCourse(this.course).subscribe(
        () => this.router.navigate(['courses'])
      ); */
    }
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
