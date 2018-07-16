import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses-provider.service';
import { CourseItem } from '../course-item';
import { FilterCoursesPipe } from '../filter-courses.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  searchString: string;
  courses: CourseItem[];
  visibleCourses: CourseItem[];
  private filterCourses: FilterCoursesPipe = new FilterCoursesPipe();
  private updateList = () => this.visibleCourses = this.courses = this.coursesService.getCoursesList();

  constructor(private coursesService: CoursesService) {
    this.visibleCourses = this.courses = [];
    this.searchString = '';
  }

  ngOnInit() {
    this.updateList();
  }

  findCourse(text: string): void {
    this.visibleCourses = this.filterCourses.transform(this.courses, text);
  }

  addCourse(): void {
    console.log('Add course click');
  }

  editCourse(course: CourseItem) {
    console.log('Edit', course);
  }

  deleteCourse(id: number): void {
    if (confirm('Do you really want to delete this course?')) {
      this.coursesService.removeCourse(id);
      this.updateList();
    }
  }

  loadMore() {
    console.log('Load more button click');
  }
}
