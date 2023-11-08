import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentDetail } from 'src/shared/models/interfaces/student-details';
import { ServiceService } from 'src/shared/services/service.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {
  studentId : string = "";
  attendance: StudentDetail = {
    name: '',
    studentID: 0,
    gender: '',
    email: '',
    phone: 0,
    attendance_details : []
  }
  displayedColumns: string[] = ['Date', 'Status'];
  
  constructor(private service: ServiceService , private activatedRoute : ActivatedRoute){
  }

  ngOnInit(){
    this.getStudentId();
    this.service.getStudentData(this.studentId).subscribe((data)=>{
      this.attendance = data;
      console.log(data.attendance_details);
    })
  }
  getStudentId(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.studentId = params.get('id')!;
      console.log(this.studentId)
    })
  }
}
