import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loading: boolean;

  constructor() {
    this.loading = false;
  }

  show(): void {
    this.loading = true;
  }

  hide(): void {
    this.loading = false;
  }
}
