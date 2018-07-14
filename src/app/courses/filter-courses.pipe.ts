import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from './course-item';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(value: CourseItem[], searchString: string): CourseItem[] {
    const filterCb = function(item: CourseItem) {
      return (item.title.toLowerCase().indexOf(searchString) > -1) ||
             (item.description.toLowerCase().indexOf(searchString) > -1) ||
             (new DatePipe('en-US').transform(item.creationDate, 'dd.MM.yyyy').indexOf(searchString) > -1);
    };

    searchString = searchString.toLowerCase();

    return value.filter(filterCb);
  }

}
