import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-loader',
  template: '<div class="blind" *ngIf="loader.loading"><div class="sticky-top text-center">Loading...</div></div>'
})
export class LoaderComponent implements OnInit {


  constructor(public loader: LoaderService) {

  }

  ngOnInit() {
  }

}
