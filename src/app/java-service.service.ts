import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaServiceService {

  constructor(private http:HttpClient) { }

  apiUrl="http://localhost:8080/course"

  getCourses():Observable<any>{
    return this.http.get(this.apiUrl)
  }
  addCourse(course:any):Observable<any>{
    return this.http.post(this.apiUrl,course)
  }
  deleteCourse(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
  getCourse(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  updateCourse(course:any){
    return this.http.put(this.apiUrl,course)
  }
}
