import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseItems: CourseItem[] = [
    new CourseItem(1, 'Course #1', 1520948051000, 70, 'Course description #1', true),
    new CourseItem(2, 'Course #2', 1530948052000, 35, 'Course description #2'),
    new CourseItem(3, 'Course #3', 1520948053000, 60, 'Course description #3'),
    new CourseItem(4, 'Course #4', 1520948054000, 121, 'Course description #4'),
    new CourseItem(5, 'Course #5', 1520938056000, 164, 'Course description #5'),
    new CourseItem(6, 'Course #6', 1630950056000, 99, 'Course description #6')
  ];

  constructor() { }

  createCourse(course: CourseItem) {
    this.courseItems.push(course);
  }

  getCoursesList(): CourseItem[]  {
    return this.courseItems;
  }

  getCourseById(id: number): CourseItem {
    return this.courseItems.find((item: CourseItem) => item.id === id);
  }

  removeCourse(id: number) {
    const index: number = this.courseItems.findIndex((item: CourseItem) => item.id === id);

    if (index !== -1) {
      this.courseItems.splice(index, 1);
    }
  }

  updateCourse(course: CourseItem) {
    const index: number = this.courseItems.findIndex((item: CourseItem) => item.id === course.id);

    if (index !== -1) {
      this.courseItems[index] = course;
    }
  }
}