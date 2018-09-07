import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, exhaustMap } from 'rxjs/operators';

import { CourseItem } from '../course.model';
import { CoursesActionTypes } from '../courses.reducer';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit, OnDestroy {
  public course: CourseItem;
  private courseSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>
  ) {}

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

    this.courseSubscription = course.subscribe(item => this.course = item);
  }

  ngOnDestroy() {
    this.courseSubscription.unsubscribe();
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
