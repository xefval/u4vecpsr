import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, exhaustMap } from 'rxjs/operators';

import { Course, CourseItem } from '../course.model';
import { CoursesActionTypes } from '../courses.reducer';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit {
  public course: any;
  public editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      date: '',
      description: ['', [
        Validators.required,
        Validators.maxLength(4),
      ]],
      length: '',
      name: ['', [
        Validators.required,
        Validators.maxLength(4),
      ]]
    });
  }

  ngOnInit() {
    const course = this.route.params.pipe(
      map(data => parseInt(data['id'], 10)),
      exhaustMap(id => {
        if (!isNaN(id) && id > 0) {
          return this.store.select('courses', 'loadedItems').pipe(
            map(list => list.filter(val => val.id === id)),
            map(list => list[0])
          );
        } else {
          return of(new CourseItem(0, '', new Date(), 60, 'Course'));
        }
      })
    );

    course.subscribe(item => this.editForm.patchValue({
      date: new Date(Date.parse(item.date)).toLocaleDateString('en-US'),
      description:  item.description,
      length: item.length,
      name: item.name
    }));
  }

  saveCourse(): void {
    if (this.course.id === 0) {
      this.store.dispatch({
        type: CoursesActionTypes.Create,
        payload: { course: this.course }
      });
    } else {
      this.store.dispatch({
        type: CoursesActionTypes.Edit,
        payload: { course: this.course }
      });
    }

    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
