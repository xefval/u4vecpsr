import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() id: number;
  @Input() description: string;
  @Input() creationDate: Date;
  @Input() minDuration: number;
  @Input() title: string;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();
  delete(id): void {
    this.deleteCourse.emit(id);
  }
  constructor() { }

  ngOnInit() {
  }

}
