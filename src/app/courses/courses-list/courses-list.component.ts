import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses-provider.service';
import { CourseItem } from '../course-item';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DlgConfirmComponent } from '../dlg-confirm/dlg-confirm.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public searchString: string;
  public visibleCourses: CourseItem[];
  private page: number;
  private coursesPerPage: number;
  private searchStr: Subject<string>;

  constructor(
    private coursesService: CoursesService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.visibleCourses = [];
    this.searchString = '';
    this.searchStr = new Subject<string>();
  }

  loadPage() {
    this.coursesService.getCoursesPage(this.page * this.coursesPerPage, this.coursesPerPage).subscribe(
      x => { this.visibleCourses = this.visibleCourses.concat(x); }
    );
  }

  ngOnInit() {
    this.page = 0;
    this.coursesPerPage = 10;
    this.loadPage();
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
        this.coursesService.deleteCourse(id).subscribe(
          () => this.updateList()
        );
      }
    });
  }

  loadMore() {
    this.page = this.page + 1;
    this.loadPage();
  }

  updateList() {
    this.coursesService.getCoursesPage(0, (this.page + 1) * this.coursesPerPage).subscribe(
      x => { this.visibleCourses = x; }
    );
  }

  searchList(text: string) {
    this.coursesService.findCourses(text).subscribe(
      courses => { this.visibleCourses = courses; }
    );
  }
}
