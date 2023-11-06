import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{

  studentForm: FormGroup | undefined;

  constructor(private fb: FormBuilder){
    // this.studentForm = fb.group({});
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentID: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]) ,
      name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]),
      phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]),
      gender: this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)])
    })
    throw new Error('Method not implemented.');
  }

  get studentID(){
    return this.studentForm?.get('studentID');
  }
  get name(){
    return this.studentForm?.get('name');
  }

  colorControl = new FormControl('primary' as ThemePalette);

  getErrorMessage() {
    if (this.studentID?.hasError('required')) {
      return 'You must enter a value';
    }

    return this?.studentID?.hasError('email') ? 'Not a valid email' : '';
  }


}
