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
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AuthorInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AuthorInputComponent), multi: true }
  ]
})
export class AuthorInputComponent {

}
