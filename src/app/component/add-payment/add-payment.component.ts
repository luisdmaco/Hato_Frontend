import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-payment",
  templateUrl: "./add-payment.component.html",
  styleUrls: ["./add-payment.component.css"],
})
export class AddPaymentComponent {
  constructor(private router: Router) {}
  signUp() {
    this.router.navigate(["/room-services"]);
  }
}
