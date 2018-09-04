import { Component, OnInit, forwardRef } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  Validators,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  template: `<input class="form-control" type="text" [formControl]="dateInput">`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateInputComponent), multi: true }
  ]
})
export class DateInputComponent implements OnInit, Validator {
  public disabled: boolean;
  public dateInput: FormControl;

  ngOnInit() {
    this.dateInput = new FormControl(
      { value: '', disabled: this.disabled },
      [
        Validators.required,
        Validators.pattern(/^(\d{1}|0\d{1}|1[0-2])\/(\d{1}|[0-2]\d{1}|3[0-1])\/(20\d{2})$/)
      ]
    );
  }

  onChange = (date: string) => {};
  onTouched = () => {};

  writeValue(date: string): void {
    this.dateInput.setValue(date);
    this.onChange(date);
  }

  registerOnChange(fn: (date: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('test')
    return {'custom': 'true'};
  }
}
