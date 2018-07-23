import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveCourse() {
    this.router.navigate(['list']);
  }

  cancel() {
    this.router.navigate(['list']);
  }
}
