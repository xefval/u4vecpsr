import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CourseBorderDirective } from './course-border.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div id="tcbc" [appCourseBorder]="date"></div>`
})
class TestCourseBorderComponent {
  public date: any;

  constructor() { this.date = Date.now(); }

  setDate(date) {
    this.date = date;
  }
}

describe('CourseBorderDirective', () => {
  let component: TestCourseBorderComponent;
  let fixture: ComponentFixture<TestCourseBorderComponent>;
  let divElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBorderDirective, TestCourseBorderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCourseBorderComponent);
    component = fixture.componentInstance;
    divElement = fixture.debugElement.query(By.css('#tcbc'));
    fixture.detectChanges();
  });

  it('should set fresh class for current date', () => {
    expect(divElement.nativeElement.classList.contains('fresh')).toBe(true);
  });
});
