import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, exhaustMap } from 'rxjs/operators';

import { Course, CourseItem } from '../course.model';
import { CoursesActionTypes } from '../courses.reducer';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;
  private courseSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      authors: '',
      date: '',
      description: ['', [
        Validators.required,
        Validators.maxLength(500),
      ]],
      id: '',
      length: '',
      name: ['', [
        Validators.required,
        Validators.maxLength(50),
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

    this.courseSubscription = course.subscribe(item => this.editForm.patchValue({
      date: new Date(Date.parse(item.date)).toLocaleDateString('en-GB'),
      description:  item.description,
      id: item.id,
      length: item.length,
      name: item.name,
      authors: item.authors && item.authors.map(val => {
        if (!val.name) {
          val.name = val.firstName + ' ' + val.lastName;
        }
        return val;
      })
    }));
  }

  ngOnDestroy() {
    this.courseSubscription.unsubscribe();
  }

  get f() { return this.editForm.controls; }

  saveCourse(): void {
    const course = this.editForm.value;
    if (course.id === 0) {
      this.store.dispatch({
        type: CoursesActionTypes.Create,
        payload: { course: course }
      });
    } else {
      this.store.dispatch({
        type: CoursesActionTypes.Edit,
        payload: { course: course }
      });
    }

    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
