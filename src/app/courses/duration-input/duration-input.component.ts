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
    this.duration = '80';
  }

  isNumber(duration: string) {
    return isNaN(parseInt(duration, 10));
  }
}
