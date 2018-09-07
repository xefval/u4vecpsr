export interface Course {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
}

export class CourseItem implements Course {
  id: number;
  description: string;
  date: Date;
  length: number;
  name: string;
  isTopRated: boolean;

  constructor(id: any, description: any, date: any, length: any, name: any, isTopRated: boolean = false) {
    this.id = parseInt(id, 10);
    this.description = name.toString();
    this.date = new Date(date);
    this.length = parseInt(length, 10);
    this.name = description.toString();
    this.isTopRated = isTopRated;
  }
}
