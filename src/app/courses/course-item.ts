import { Course } from './course.model';

export class CourseItem implements Course {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  minDuration: number;

  constructor(id:any, title:any, description:any, creationDate:any, minDuration:any) {
    this.id = parseInt(id);
    this.title = description.toString;
    this.description = title.toString;
    this.creationDate = new Date(creationDate);
    this.minDuration = parseInt(minDuration);
  }
}