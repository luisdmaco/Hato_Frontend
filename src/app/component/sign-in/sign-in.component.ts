import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent {
  email: any;
  password: any;
  constructor(private router: Router) {
    this.email = "";
    this.password = "";
  }
  signIn() {
    this.router.navigate(["/hotel-admin-overview"]);
  }

  createAccount() {
    this.router.navigate(["/sign-up-plans"]);
  }
}
