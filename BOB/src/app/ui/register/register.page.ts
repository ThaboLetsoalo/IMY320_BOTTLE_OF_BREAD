import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  registerForm: FormGroup; // Define FormGroup
  currentStep = 2;
  errorMessage = "";
  showErrorMessage = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService) {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      cpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      status: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator() });
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const cpassword = control.get('cpassword');
  
      if (password && cpassword && password.value === cpassword.value) {
        this.showErrorMessage = false;
        return { passwordMismatch: true };
      } else {
        if(cpassword && cpassword.value.trim()!="") {
          this.errorMessage = "Confirmation password does not match entered password";
          this.showErrorMessage = true;
        }
        return null;
      }
    };
  }

  async register() {
    if (this.registerForm.valid) {
      const email = this.registerForm?.get('email')?.value;
      const password = this.registerForm?.get('password')?.value;
      await this.auth.register(email, password);
    } else {
      this.errorMessage = "Missing inputs, please fill all the field";
      this.showErrorMessage = true;
    }
  }

  setCurrentStep(step: number) {
    this.currentStep = step;
  }
}

