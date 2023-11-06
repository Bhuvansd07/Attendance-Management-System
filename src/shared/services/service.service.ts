import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetail } from '../models/interfaces/student-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<Array<StudentDetail>> {
    return this.http.get<StudentDetail[]>('https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails')
  }
}
