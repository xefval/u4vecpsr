import { Component, Input, OnInit, OnChanges,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() title: string;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
