import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentDetail } from 'src/shared/models/interfaces/student-details';
import { ServiceService } from 'src/shared/services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})


export class ViewAttendanceComponent implements OnInit{
  allStudent :  Array<StudentDetail> = [];
  attendanceForm: FormGroup | undefined;
  studentName : string = "";

  constructor(private fb: FormBuilder, private service: ServiceService, private _snackBar: MatSnackBar){ 
  }
  ngOnInit(){
    this.attendanceForm = this.fb.group({
      studentID: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      name: [this.studentName,[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      date: [''],
      status: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(7)]]
    })

    this.service.fetchData().subscribe(
      (response: any) => {
        this.allStudent = response;
      }
    )
    console.log(this.allStudent);
  }

  get studentID(){
    return this.attendanceForm?.get('studentID');
  }

  get name(){
    return this.attendanceForm?.get('name');
  }

  get date(){
    return this.attendanceForm?.get('date');
  }

  get status(){
    return this.attendanceForm?.get('status');
  }

  getErrorMessage(data : any) {
    if (data?.hasError('required')) {
      return 'You must enter a valid value';
    }
    return data?.hasError(data) ? 'Not a valid {{data}}' : '';
  }

  openSnackBar() {
    this._snackBar.open('Attendance Updated!!', 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  updateAttendance(){
    var attendanceStudent = this.allStudent.filter((element : any) => (element.studentID===this.attendanceForm?.value.studentID))
    attendanceStudent[0].attendance_details!.push({ date : this.attendanceForm?.value.date,status:this.attendanceForm?.value.status})
    const student : StudentDetail = {
      id : attendanceStudent[0].id,
      name: this.attendanceForm?.value.name,
      studentID: this.attendanceForm?.value.studentID,
      gender: attendanceStudent[0].gender,
      email: attendanceStudent[0].email,
      phone: attendanceStudent[0].phone,
      attendance_details : attendanceStudent[0].attendance_details
    }
    console.log(student);
    this.service.updateAttendance(student);
    this.openSnackBar();

  }

  findStudent(event : number){
    this.allStudent.forEach(element => {
      if(element.studentID===event){
        this.studentName = element.name;
      }
    });
  }
}


