import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, DoCheck {
  @Input() title: string;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
}
