import { Course } from './course.model';

export class CourseItem implements Course {
  id: number;
  description: string;
  creationDate: Date;
  minDuration: number;
  title: string;

  constructor(id: any, description: any, creationDate: any, minDuration: any, title: any) {
    this.id = parseInt(id, 10);
    this.description = title.toString();
    this.creationDate = new Date(creationDate);
    this.minDuration = parseInt(minDuration, 10);
    this.title = description.toString();
  }
}
