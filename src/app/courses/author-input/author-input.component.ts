import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesActionTypes } from '../courses.reducer';

@Component({
  selector: 'app-author-input',
  template: `
    <ul class="selected"><li><li></ul>
    <input class="form-control" type="text" [formControl]="authorsInput">
    <ul class="available" *ngFor="let author of visibleAuthors"><li>{{ author }}<li></ul>`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AuthorInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AuthorInputComponent), multi: true }
  ]
})
export class AuthorInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  public authorsInput = new FormControl('');
  public values: string[];
  private authors$: Observable<string[]>;

  constructor(
    private store: Store<any>
  ) {
    this.store.dispatch({ type: CoursesActionTypes.LoadAuthors });

    this.authors$ = combineLatest(
      this.store.select('courses', 'authors'),
      this.authorsInput.valueChanges
    ).pipe(
      map(([authors, str]) => {
        if (found) {
          return found;
        } else {
          return list;
        }
      })
    );

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.authorsInputSubscription.unsubscribe();
  }

  onTouched = () => {};
  propagateChange = (val) => {};
  validateFn = (c) => this.authorsInput.errors;

  writeValue(value) {
    if (value) {
      this.authorsInput.setValue(value);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
