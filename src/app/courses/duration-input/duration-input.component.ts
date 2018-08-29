import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {
  public duration: FormControl;

  constructor() {
    this.duration = new FormControl({ value: 80 });
  }

  ngOnInit() {
  }

  isNumber(duration: string) {
    return isNaN(parseInt(duration, 10));
  }
}
