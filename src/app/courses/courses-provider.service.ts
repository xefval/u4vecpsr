import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { }

  getCourseById(id: number): Observable<CourseItem> {
    return this.http.get<CourseItem>(`${BASE_URL}/${id}`);
  }

  getCoursesList(): Observable<CourseItem[]>  {
    return this.http.get<CourseItem[]>(`${BASE_URL}`);
  }

  getCoursesPage(start: number, count: number): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${BASE_URL}?start=${start}&count=${count}`);
  }

  findCourses(textFragment: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${BASE_URL}?textFragment=${textFragment}`);
  }

  deleteCourse(id: number): Observable<CourseItem> {
    return this.http.delete<CourseItem>(`${BASE_URL}/${id}`);
  }

  createCourse(course: CourseItem): Observable<any> {
    return this.http.post<CourseItem>(`${BASE_URL}`, course);
  }

  putCourse(course: CourseItem): Observable<any> {
    return this.http.put<CourseItem>(`${BASE_URL}/${course.id}`, course);
  }
}
