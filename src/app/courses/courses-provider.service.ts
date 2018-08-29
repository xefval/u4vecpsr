import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${BASE_URL}/${id}`);
  }

  getList(): Observable<Course[]>  {
    return this.http.get<Course[]>(`${BASE_URL}`);
  }

  loadPage(start: number, count: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${BASE_URL}?start=${start}&count=${count}`);
  }

  search(textFragment: string): Observable<Course[]> {
    if (textFragment.length === 0) {
      return of(null);
    }
    return this.http.get<Course[]>(`${BASE_URL}?textFragment=${textFragment}`);
  }

  delete(id: number): Observable<Course> {
    return this.http.delete<Course>(`${BASE_URL}/${id}`);
  }

  create(course: Course): Observable<any> {
    return this.http.post<Course>(`${BASE_URL}`, course);
  }

  put(course: Course): Observable<any> {
    return this.http.put<Course>(`${BASE_URL}/${course.id}`, course);
  }
}
