import { TestBed, async } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';


xdescribe('AppComponent', () => {
  let fixture, sut;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    sut = fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(sut).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    sut.ngOnInit();
    expect(sut.title).toBe('Videocourses');
  }));
});
