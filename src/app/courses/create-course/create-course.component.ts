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

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      const courseId = data['id'];

      if (courseId === 'new') {
        this.course = new CourseItem(0, '', new Date(), 60, 'Course');
      } else if (courseId > 0) {
        this.course = this.coursesService.getCourseById(+courseId);
      }
    });
  }

  saveCourse() {
    this.coursesService.updateCourse(this.course);
    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
