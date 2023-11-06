import { Component } from '@angular/core';
import { StudentDetail } from 'src/shared/models/interfaces/student-details';
import { ServiceService } from 'src/shared/services/service.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})


export class ViewAttendanceComponent {

  displayedColumns: string[] = ['SID', 'Name', 'Email', 'Action'];

  studentDetails: StudentDetail[] = [];

  constructor(private service: ServiceService){ 
    service.fetchData().subscribe(
      (response)=>{
        console.log(response);
        
        this.studentDetails = response;
      },
      (error)=>{
        console.error(error);
      }
    )
  }


}
