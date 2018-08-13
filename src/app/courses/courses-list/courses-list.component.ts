import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses-provider.service';
import { CourseItem } from '../course-item';
import { FilterCoursesPipe } from '../filter-courses.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DlgConfirmComponent } from '../dlg-confirm/dlg-confirm.component';
import { Router } from '@angular/router';

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
  private filterCourses: FilterCoursesPipe = new FilterCoursesPipe();

  constructor(
    private coursesService: CoursesService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.visibleCourses = [];
    this.searchString = '';
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
  }

  findCourse(text: string): void {
    this.coursesService.findCourses(this.searchString).subscribe(
      x => { this.visibleCourses = x; }
    );
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
}
