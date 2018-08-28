import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { filter, debounceTime } from 'rxjs/operators';

import { DlgConfirmComponent } from '../dlg-confirm/dlg-confirm.component';
import { Course } from '../course.model';
import { CoursesActionTypes } from '../courses.reducer';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {
  public searchString: string;
  public foundItems$: Course[];
  private searchStr: Subject<string>;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private store: Store<any>
  ) {
    this.foundItems$ = [];
    this.searchString = '';
    this.searchStr = new Subject<string>();
  }

  loadNextPage() {
    this.store.dispatch({ type: CoursesActionTypes.LoadNextPage });
  }

  ngOnInit() {
    this.loadNextPage();
    this.searchStr
      .pipe(
        debounceTime(500),
        filter((text) => text.length === 0 || text.length > 2)
      )
      .subscribe(
        (text: string) => {
          if (text.length === 0) {
            this.updateList();
          } else {
            this.searchList(text);
          }
        }
      );
  }

  findCourse(event: string): void {
    this.searchStr.next(event);
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

  updateList() {
/*     this.coursesService.getCoursesPage(0, (this.page + 1) * this.coursesPerPage).subscribe(
      x => { this.visibleCourses = x; }
    ); */
  }

  searchList(text: string) {
/*     this.coursesService.findCourses(text).subscribe(
      courses => { this.visibleCourses = courses; }
    ); */
  }
}
