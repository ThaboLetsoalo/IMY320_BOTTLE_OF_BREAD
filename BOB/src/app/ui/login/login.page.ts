import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  errorMessage = "";
  showErrorMessage = false;
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private auth: AuthService) {
    this. loginForm = this.formBuilder.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.minLength(8), Validators.maxLength(25)]]
    })
  }

  login() {
    if(this.loginForm.valid) {
      const email = this.loginForm?.get('email')?.value;
      const password = this.loginForm?.get('password')?.value;
      this.auth.login(email, password);
    } else {
      this.errorMessage = "Missing inputs, please fill all the fields";
      this.showErrorMessage = true;
    }
  }

  getCurrentMode() {
    return document.documentElement.getAttribute('data-theme');
  }
}
