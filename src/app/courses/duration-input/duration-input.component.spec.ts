import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DurationInputComponent } from './duration-input.component';
import { VideoDurationPipe } from '../video-duration.pipe';

describe('DurationInputComponent', () => {
  let component: DurationInputComponent;
  let fixture: ComponentFixture<DurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ VideoDurationPipe, DurationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
