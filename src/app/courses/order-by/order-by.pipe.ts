import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, field: string, direction: string = 'asc'): any {
    const asc = direction === 'dsc' ? false : true;
    const compare = function(a: any, b: any) {
      if (a[field] < b[field]) {
        if (asc) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a[field] > b[field]) {
        if (asc) {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    };

    return value.sort(compare);
  }

}
