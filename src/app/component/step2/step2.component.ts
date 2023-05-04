import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.css"],
})
export class Step2Component {
  hostal!: string;
  drink!: string;
  food!: string;
  condom!: string;
  drinkNumber!: string;
  foodNumber!: string;
  condomNumber!: string;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.hostal = this.dataService.nhostal;
    this.drink = this.dataService.drink;
    this.food = this.dataService.food;
    this.condom = this.dataService.condoms;
    this.drinkNumber = this.dataService.ndrink;
    this.foodNumber = this.dataService.nfood;
    this.condomNumber = this.dataService.ncondoms;
  }
  Confirmar() {
    this.router.navigate(["/room-services"]);
  }
}
