import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  registerForm: FormGroup; // Define FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      cpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]]
    });
  }

  async register() {
    if (this.registerForm.valid) {
      const email = this.registerForm?.get('email')?.value;
      const password = this.registerForm?.get('password')?.value;
      await this.auth.register(email, password);
    } else {
      console.log("missing fields")
    }
  }
}

