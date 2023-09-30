import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm = this.formBuilder.group({
    email: ['',[Validators.email]],
    password: ['',[Validators.minLength(8), Validators.maxLength(25)]]
  })

  constructor(private router: Router, private formBuilder: FormBuilder,private auth: AuthService) {}

  login() {
    const email = this.loginForm?.get('email')?.value;
    const password = this.loginForm?.get('password')?.value;
    if(email != null && password != null) {
      this.auth.login(email, password);
    } else {
      console.log("missing fields")
    }
  }
}
