import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesActionTypes } from '../courses.reducer';

@Component({
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AuthorInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AuthorInputComponent), multi: true }
  ]
})
export class AuthorInputComponent implements ControlValueAccessor {
  public authorsInput = new FormControl('');
  public values: any[];
  private authors$: Observable<string[]>;

  constructor(
    private store: Store<any>
  ) {
    this.values = [];
    this.propagateChange(this.values);

    this.store.dispatch({ type: CoursesActionTypes.LoadAuthors });

    this.authors$ = combineLatest(
      this.store.select('courses', 'authors'),
      this.authorsInput.valueChanges
    ).pipe(
      map(([authors, str]) => {
        if (!str) {
          return [];
        }

        const reg = new RegExp(str, 'gi');
        return authors.filter(val => reg.test(val.name));
      }),
      map(values => values.filter(val => this.values.indexOf(val) === -1) )
    );
  }

  get value(): string[] {
    return this.values;
  }

  set value(value: string[]) {
    this.writeValue(value);
  }

  onTouched = () => {};
  propagateChange = (val) => {};
  validateFn = (c: FormControl) => {
    const err = {
      required: true
    };

    return (!c.value || c.value.length < 1) ? err : null;
  }

  writeValue(value) {
    if (value && Array.isArray(value)) {
      this.values = value;
      this.propagateChange(this.values);
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

  addValue(author) {
    this.values.push(author);
    this.authorsInput.setValue('');
    this.propagateChange(this.values);
  }

  removeValue(value) {
    this.values.splice(this.values.indexOf(value), 1);
    this.propagateChange(this.values);
  }
}
