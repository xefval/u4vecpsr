import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CoursesListComponent } from './courses-list.component';
import { OrderByPipe } from '../order-by.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: '', component: CoursesListComponent },
          { path: 'courses', component: CoursesListComponent }]
        )
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

  it('should log into console on Load-More button click', () => {
    const button = fixture.debugElement.query(By.css('.btn.load-more'));
    button.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalledWith('Load more button click');
  });

  it('should echo couse-component for each course in courses property', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const appCourses: NodeListOf<HTMLElement> = nativeElement.querySelectorAll('app-course');
    expect(appCourses.length).toBe(6);
  });

  it('should search courses', () => {
    const searchInput: any = fixture.debugElement.query(By.css('input.search')).nativeElement;
    const searchButton: DebugElement = fixture.debugElement.query(By.css('button.search'));

    searchInput.value = '#6';
    searchInput.dispatchEvent(new Event('input'));

    expect(component.searchString).toBe('#6');

    searchButton.triggerEventHandler('click', null);
  });

});
