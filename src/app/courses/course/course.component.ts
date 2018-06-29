import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { CourseItem } from '../course-item';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: CourseItem;
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  editCourse(): void {
    this.edit.emit();
  }
  deleteCourse(): void {
    this.delete.emit();
  }
  constructor() { }

  ngOnInit() {
  }
}
