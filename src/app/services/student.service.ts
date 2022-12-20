import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = environment.api_url;
  constructor(private http: HttpClient) { }

  getAllStudent() {
    return this.http.get(this.url);
  }

  addStudent(studentDetails: any) {
    return this.http.post(this.url, studentDetails);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.url + id);
  }

  getStudentByID(id: number) {
    return this.http.get(this.url + id);
  }

  updateStudent(id: number, student: any) {
    return this.http.put(this.url + student, id);
  }
}
