import { Component, OnInit } from '@angular/core';
import { COURSE_ITEMS } from '../mock-courses';
import { CourseItem } from '../course-item';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  searchString: string;
  courses: CourseItem[];
  findCourse(text: string): void {
    console.log('Find course click' + text);
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
  constructor() {
    this.courses = [];
    this.searchString = '';
  }

  ngOnInit() {
    this.courses = COURSE_ITEMS;
  }

}
