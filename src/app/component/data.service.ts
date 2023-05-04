import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  nhostal!:string;
  drink!:string;
  food!:string;
  condoms!:string;
  ndrink!:string;
  nfood!:string;
  ncondoms!:string;
  SaveValues(selectedOptionNro: string, selectedOptionfood: string, selectedOptiondrink: string, selectedOptioncondoms: string, foodnumber: string, drinknumber: string, condomsnumber: string) {
    // aquí puedes hacer lo que quieras con los valores que recibes
    console.log(selectedOptionNro, selectedOptionfood, selectedOptiondrink, selectedOptioncondoms, foodnumber, drinknumber, condomsnumber);
    this.nhostal=selectedOptionNro;
    this.drink=selectedOptiondrink;
    this.food=selectedOptionfood;
    this.condoms=selectedOptioncondoms;
    this.ndrink=drinknumber;
    this.nfood=foodnumber;
    this.ncondoms=condomsnumber;
  }
}