import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentDetail } from 'src/shared/models/interfaces/student-details';
import { ServiceService } from 'src/shared/services/service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  studentId: string = "";
  editForm: FormGroup;
  studentToEdit: StudentDetail = {name: '', studentID: 0, gender: '', email: '', phone: 0};

  constructor(private fb: FormBuilder, private service: ServiceService, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.editForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]),
      phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]),
      gender: this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)])
    });
  }

  ngOnInit() {
    this.getStudentId();
    this.service.getStudentData(this.studentId).subscribe((data)=>{
      this.studentToEdit = data;
      this.editForm = this.fb.group({
        name: this.fb.control(this.studentToEdit.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
        email: this.fb.control(this.studentToEdit.email, [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]),
        phone: this.fb.control(this.studentToEdit.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]),
        gender: this.fb.control(this.studentToEdit.gender, [Validators.required, Validators.minLength(4), Validators.maxLength(6)])
      })
    });
  }

  get name() {
    return this.editForm?.get('name');
  }

  get email() {
    return this.editForm?.get('email');
  }

  get phone() {
    return this.editForm?.get('phone');
  }

  get gender() {
    return this.editForm?.get('gender')
  }


  getErrorMessage(data: any) {
    if (data?.hasError('required')) {
      return 'You must enter a valid value';
    }
    return data?.hasError(data) ? 'Not a valid {{data}}' : '';
  }

  getStudentId(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.studentId = params.get('id')!;
      console.log(this.studentId)
    })
  }

  openSnackBar() {
    this._snackBar.open('Student Details Edited!!', 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  editStudent(){
    this.studentToEdit.name = this.editForm.value.name;
    this.studentToEdit.email = this.editForm.value.email;
    this.studentToEdit.phone = this.editForm.value.phone;
    this.studentToEdit.gender = this.editForm.value.gender;
    this.service.updateAttendance(this.studentToEdit);
    this.openSnackBar();
  }
}