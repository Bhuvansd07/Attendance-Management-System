import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetail } from '../models/interfaces/student-details';
import { Observable } from 'rxjs';
import { StmtModifier } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<Array<StudentDetail>> {
    return this.http.get<StudentDetail[]>('https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails')
  }

  addData(student : StudentDetail){

    student.attendance_details = [];
    console.log(student);
    return this.http.post('https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails',student).subscribe(); 
    // console.log(student);
  }

  updateAttendance(student : StudentDetail){
    return this.http.put('https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails/'+student.id,student).subscribe(); 
  }

  getStudentData(id: string): Observable<StudentDetail> {
    return this.http.get<StudentDetail>(`https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails/`+id);
  }

  deleteStudent(id : number){
    console.log(id);
    // const url='https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails/'+id;
    return this.http.delete(`https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails/${id}`);
  }

}
