import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/shared/services/service.service';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{

  studentForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private service: ServiceService,private _snackBar : MatSnackBar ){
  }

  ngOnInit(): void {
        this.studentForm = this.fb.group({
      studentID: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]) ,
      name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]),
      phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]),
      gender: this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)])
    })
  }

  get studentID(){
    return this.studentForm?.get('studentID');
  }

  get name(){
    return this.studentForm?.get('name');
  }

  get email(){
    return this.studentForm?.get('email');
  }

  get phone(){
    return this.studentForm?.get('phone');
  }

  get gender(){
    return this.studentForm?.get('gender')
  }

  getErrorMessage(data : any) {
    if (data?.hasError('required')) {
      return 'You must enter a valid value';
    }
    return data?.hasError(data) ? 'Not a valid {{data}}' : '';
  }

  addStudent(){
    if(this.studentForm?.valid){
          console.log(this.studentForm?.value)
          this.service.addData(this.studentForm.value);
          this.openSnackBar();
    }
  }
  openSnackBar() {
    this._snackBar.open('Student Added!!', 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
