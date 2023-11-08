import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { StudentDetail } from 'src/shared/models/interfaces/student-details';
import { ServiceService } from 'src/shared/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['SID', 'Name','Phone','Gender', 'Email', 'Action'];
  isLoading = true;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  studentDetails: StudentDetail[] = [];
  pageIndex: number = 0;
  pageSize : number = 10;
  allStudentDetails : StudentDetail[] = [];
  constructor(private service: ServiceService){ }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.service.fetchData().subscribe(
      (response)=>{
        console.log(response);
        this.studentDetails = response;
        this.allStudentDetails = this.studentDetails;
        this.isLoading = false;
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  onPageChanges(change : PageEvent){
    this.pageIndex = change.pageIndex;
    this.pageSize = change.pageSize;
  }

  deleteStudent(id : number){
    this.service.deleteStudent(id).subscribe((response)=>{
      console.log("Successfull"!);
      this.fetchData();
    });
  }

  applyChange(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    if(filterValue===""){
      this.studentDetails = this.allStudentDetails;
    }
    else{
      this.studentDetails = this.allStudentDetails.filter((element) => element.name.trim().toLowerCase().includes(filterValue.toLowerCase()));
    }
  }
}
