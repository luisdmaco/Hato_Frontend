import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-room-services",
  templateUrl: "./room-services.component.html",
  styleUrls: ["./room-services.component.css"],
})
export class RoomServicesComponent {
  constructor(private router: Router) {}
  step1() {
    this.router.navigate(["/step-1"]);
  }
}
