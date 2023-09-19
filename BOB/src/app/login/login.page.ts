import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = "";
  password: string="";

  constructor(private router: Router) {}

  login() {
    // Here, you can implement your login logic.
    // For demonstration purposes, we'll navigate to a dummy home page.
    this.router.navigate(['/home']);
  }
}
