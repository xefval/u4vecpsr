import { Component, OnInit } from '@angular/core';
import { COURSE_ITEMS } from '../mock-courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses = COURSE_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
