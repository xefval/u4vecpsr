import { Component, OnInit } from '@angular/core';
import { COURSE_ITEMS } from '../mock-courses';
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

  constructor() {
    this.visibleCourses = this.courses = [];
    this.searchString = '';
  }

  ngOnInit() {
    this.visibleCourses = this.courses = COURSE_ITEMS;
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
    console.log('Delete course ' + id.toString() + ' click');
  }

  loadMore() {
    console.log('Load more button click');
  }

}
