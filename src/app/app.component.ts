import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string;
  constructor() {
    this.title = '';
  }

  ngOnInit() {
    this.title = 'Videocourses';
    console.log('onInit');
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }
}
