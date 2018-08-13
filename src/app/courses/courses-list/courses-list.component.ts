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
  searchString: string;
  courses: CourseItem[];
  visibleCourses: CourseItem[];
  private page: number;
  private coursesPerPage: number;
  private filterCourses: FilterCoursesPipe = new FilterCoursesPipe();
  private updateList = () => this.visibleCourses = this.courses = this.coursesService.getCoursesList();

  constructor(private coursesService: CoursesService, private modalService: NgbModal, private router: Router) {
    this.visibleCourses = this.courses = [];
    this.searchString = '';
  }

  ngOnInit() {
    this.page = 0;
    this.coursesPerPage = 10;
    this.updateList();
  }

  findCourse(text: string): void {
    this.visibleCourses = this.filterCourses.transform(this.courses, text);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  editCourse(id: number) {
    this.router.navigate(['courses', id]);
  }

  deleteCourse(id: number): void {
    const modalRef = this.modalService.open(DlgConfirmComponent);

    modalRef.componentInstance.msg = 'Do you really want to delete this course?';
    modalRef.result.then(result => {
      if (result === 'OK') {
        this.coursesService.removeCourse(id);
        this.updateList();
      }
    });
  }

  loadMore() {
    console.log('Load more button click');
  }
}
