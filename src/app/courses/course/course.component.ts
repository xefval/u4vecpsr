import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { CourseItem } from '../course-item';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: CourseItem;
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
