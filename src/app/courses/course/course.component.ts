import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  editCourse(): void {
    this.edit.emit();
  }

  deleteCourse(): void {
    this.delete.emit();
  }

}
