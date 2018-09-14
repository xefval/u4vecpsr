import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AuthorInputComponent } from './author-input.component';
import { coursesReducer } from '../courses.reducer';

describe('AuthorInputComponent', () => {
  let component: AuthorInputComponent;
  let fixture: ComponentFixture<AuthorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({
          courses: coursesReducer
        })],
      declarations: [ AuthorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
