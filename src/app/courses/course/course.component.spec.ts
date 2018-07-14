import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseComponent } from './course.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseBorderDirective } from '../course-border.directive';
import { VideoDurationPipe } from '../video-duration.pipe';

@Component({
  template: `<app-course [course]="course" (edit)="editCourse(1)" (delete)="deleteCourse(2)"></app-course>`
})
class TestListComponent {
  public edit: any;
  public delete: any;
  public editCourse(attr) { this.edit = attr; }
  public deleteCourse(attr) { this.delete = attr; }
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDurationPipe, CourseBorderDirective, CourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CourseComponent events', () => {
  let component: TestListComponent;
  let fixture: ComponentFixture<TestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBorderDirective, VideoDurationPipe, CourseComponent, TestListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListComponent);
    component = fixture.componentInstance;
  });

  it('should rise course edit', () => {
    const editButton = fixture.debugElement.query(By.css('.button.edit'));
    editButton.triggerEventHandler('click', null);
    expect(component.edit).toBe(1);
  });

  it('should rise course delete', () => {
    const editButton = fixture.debugElement.query(By.css('.button.delete'));
    editButton.triggerEventHandler('click', null);
    expect(component.delete).toBe(2);
  });
});
