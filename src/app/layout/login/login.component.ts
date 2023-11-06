import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup | undefined;
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      Password: ['', [Validators.required, Validators.minLength(8),
      this.patternValidator(/\d/, { hasNumber: true }),
      this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      this.patternValidator(/[a-z]/, { hasSmallCase: true }),
      this.patternValidator(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/, { hasSpecialCharacters: true })
      ]],
    })
    throw new Error('Method not implemented.');
  }

  get Username(){
    return this.loginForm?.get('Username');
  }
  
  get Password(){
    return this.loginForm?.get('Password');
  }

  // custom validator to check for the password pattern
  patternValidator(regex: RegExp, validator: { [key: string]: any; }): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any; } | null => {
      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);
      return valid ? null : validator;
    };
  }
}
