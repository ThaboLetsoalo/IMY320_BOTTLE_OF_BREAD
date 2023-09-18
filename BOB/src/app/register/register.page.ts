import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fullName: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  register() {
    // Implement your registration logic here.
    // For demonstration purposes, we'll navigate to a dummy success page.
    this.router.navigate(['/registration-success']);
  }
}
