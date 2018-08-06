import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses-provider.service';
import { CourseItem } from '../course-item';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  public course: CourseItem;
  private createFlag: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.createFlag = false;

    this.route.params.subscribe((data) => {
      const courseId = data['id'];

      if (courseId === 'new') {
        this.createFlag = true;
        const id = this.coursesService.getCoursesList().reduce((val, course) => {
          return Math.max(val, course.id);
        }, 0);
        this.course = new CourseItem(id + 1, '', new Date(), 60, 'Course');
      } else if (courseId > 0) {
        this.course = this.coursesService.getCourseById(+courseId);
      }
    });
  }

  saveCourse() {
    if (this.createFlag) {
      this.coursesService.createCourse(this.course);
    } else {
      this.coursesService.updateCourse(this.course);
    }

    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
