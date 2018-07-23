import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {
  public duration: string;

  constructor() { }

  ngOnInit() {
  }

  isNumber(duration: string) {
    return isNaN(+duration);
  }
}
