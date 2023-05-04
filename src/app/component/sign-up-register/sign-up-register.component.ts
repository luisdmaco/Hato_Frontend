import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-register',
  templateUrl: './sign-up-register.component.html',
  styleUrls: ['./sign-up-register.component.css']
})
export class SignUpRegisterComponent {

  constructor(private router: Router) { }

  createAccount(){
    this.router.navigate(['/add-payment']);
  }
}
