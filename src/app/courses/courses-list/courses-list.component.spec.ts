import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesListComponent } from './courses-list.component';
import { OrderByPipe } from '../order-by/order-by.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { coursesReducer } from '../courses.reducer';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: '', component: CoursesListComponent },
          { path: 'courses', component: CoursesListComponent }]
        ),
        StoreModule.forRoot({
          courses: coursesReducer
        })
      ],
      declarations: [ OrderByPipe, CoursesListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOn(console, 'log');
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should echo couse-component for each course in courses property', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const appCourses: NodeListOf<HTMLElement> = nativeElement.querySelectorAll('app-course');
    expect(appCourses.length).toBe(0);
  });

});
