import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { filter, debounceTime, tap, map } from 'rxjs/operators';


import { DlgConfirmComponent } from '../dlg-confirm/dlg-confirm.component';
import { Course } from '../course.model';
import { CoursesActionTypes, Found } from '../courses.reducer';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {
  public searchString: string;
  public coursesList$: Observable<Course[]>;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private store: Store<any>
  ) {
    this.searchString = '';
  }

  loadNextPage() {
    this.store.dispatch({ type: CoursesActionTypes.LoadNextPage });
  }

  ngOnInit() {
    this.coursesList$ = combineLatest(
      this.store.select('courses', 'foundItems'),
      this.store.select('courses', 'loadedItems')
    ).pipe(
      map(([found, list]) => {
        if (found) {
          return found;
        } else {
          return list;
        }
      })
    );

    this.loadNextPage();
  }

  findCourse(text: string): void {
    this.store.dispatch({
      type: CoursesActionTypes.Search,
      payload: { text: text }
    });
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  editCourse(id: number): void {
    this.router.navigate(['courses', id]);
  }

  deleteCourse(id: number): void {
    const modalRef = this.modalService.open(DlgConfirmComponent);

    modalRef.componentInstance.msg = 'Do you really want to delete this course?';
    modalRef.result.then(result => {
      if (result === 'OK') {
/*         this.coursesService.deleteCourse(id).subscribe(
          () => this.updateList()
        ); */
      }
    });
  }

}
