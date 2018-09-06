import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-input',
  template: `<input class="form-control w-25" type="text" [formControl]="dateInput">`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateInputComponent), multi: true }
  ]
})
export class DateInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  public dateInput = new FormControl(
    { value: '' },
    [
      Validators.required,
      Validators.pattern(/^(\d{1}|[0-2]\d{1}|3[0-1])\/(\d{1}|0\d{1}|1[0-2])\/(20\d{2})$/)
    ]
  );
  private valueChangeSubscription: Subscription;

  ngOnInit() {
    this.valueChangeSubscription = this.dateInput.valueChanges.subscribe(
      value => this.propagateChange(value)
    );
  }

  ngOnDestroy() {
    this.valueChangeSubscription.unsubscribe();
  }

  onTouched = () => {};
  propagateChange = (val) => {};
  validateFn = (c) => this.dateInput.errors;

  writeValue(value) {
    if (value) {
      this.dateInput.setValue(value);
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
