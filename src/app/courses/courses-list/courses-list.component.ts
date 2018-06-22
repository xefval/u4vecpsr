import { Component, OnInit } from '@angular/core';
import { COURSE_ITEMS } from '../mock-courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  searchString: string;
  courses = COURSE_ITEMS;
  findCourse(text: string): void {
    console.log('Find couse click' + text);
  }
  addCourse(): void {
    console.log('Add course click');
  }
  deleteCourse(id: number): void {
    console.log('Delete course ' + id.toString() + ' click');
  }
  constructor() {
    this.searchString = '';
  }

  ngOnInit() {
  }

}
