import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-duration-input',
  template: `<div><input class="form-control d-inline w-25 mr-2" type="number" [formControl]="durationInput">
    {{ durationInput.value | videoDuration:"h m" }}</div>`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DurationInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DurationInputComponent), multi: true }
  ]
})
export class DurationInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  public durationInput = new FormControl(
    { value: '' },
    [
      Validators.required,
      Validators.pattern(/^[1-9]{1}[0-9]*$/)
    ]
  );
  private valueChangeSubscription: Subscription;

  ngOnInit() {
    this.valueChangeSubscription = this.durationInput.valueChanges.subscribe(
      value => this.propagateChange(value)
    );
  }

  ngOnDestroy() {
    this.valueChangeSubscription.unsubscribe();
  }

  onTouched = () => {};
  propagateChange = (val) => {};
  validateFn = (c) => this.durationInput.errors;

  writeValue(value) {
    if (value) {
      this.durationInput.setValue(value);
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
