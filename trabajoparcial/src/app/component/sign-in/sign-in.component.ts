import { Component } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: any;
  password: any;
  constructor() {
    this.email = '';
    this.password = '';
  }
  signIn() {
  }

  createAccount() {
  }
}
