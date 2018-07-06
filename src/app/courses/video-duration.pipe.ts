import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'videoDuration'})
export class VideoDurationPipe implements PipeTransform {
  transform(value: string, format: string): string {
    const timeSpan = parseInt(value, 10);
    const hour = Math.floor(timeSpan / 60);
    const min = timeSpan % 60;

    return format.replace('h', joinWithUnit(hour, ['h'])).replace('m', joinWithUnit(min, ['minute', 'munutes']));
  }
}

function joinWithUnit(time: number, unit: string[]) {
  if (time > 0) {
    if (time > 1 && unit.length > 1) {
      return time.toString() + unit[1];
    }

    return time.toString() + unit[0];
  }
  return '';
}
