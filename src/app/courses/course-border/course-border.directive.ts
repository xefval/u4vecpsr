import { Directive, Input, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input() appCourseBorder: Date;
  private elRef: ElementRef;

  constructor(el: ElementRef) {
    this.elRef = el;
  }

  ngOnInit() {
    let timeClass: string;
    const curDate: Date = new Date();
    const twoWeeksAgo: Date = new Date();

    twoWeeksAgo.setDate(curDate.getDate() - 14);

    if (this.appCourseBorder < curDate && this.appCourseBorder >= twoWeeksAgo) {
      timeClass = 'fresh';
    } else if (this.appCourseBorder > curDate) {
      timeClass = 'upcomming';
    }

    if (timeClass) {
      this.elRef.nativeElement.classList.add(timeClass);
    }
  }
}
