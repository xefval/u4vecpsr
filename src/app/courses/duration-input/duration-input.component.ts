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
  selector: 'app-duration-input',
  template: `<input class="form-control" type="number" [formControl]="durationInput"> {{ durationInput.value | videoDuration:"h m" }}`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DurationInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DurationInputComponent), multi: true }
  ]
})
export class DurationInputComponent implements OnInit, Validator {
  public durationInput: FormControl;
  public disabled: boolean;

  ngOnInit() {
    this.durationInput = new FormControl(
      { value: '', disabled: this.disabled },
      [
        Validators.required,
        Validators.pattern(/^(\d+)$/)
      ]
    );
  }

  onChange = (duration: number) => {};
  onTouched = () => {};

  writeValue(duration: number): void {
    this.durationInput.setValue(duration);
    this.onChange(duration);
  }

  registerOnChange(fn: (duration: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.durationInput.errors;
  }
}
