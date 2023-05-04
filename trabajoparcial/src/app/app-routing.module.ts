import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpPlansComponent } from './component/sign-up-plans/sign-up-plans.component';
import { SignUpRegisterComponent } from './component/sign-up-register/sign-up-register.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { RoomServicesComponent } from './component/room-services/room-services.component';
import { HotelAdminViewComponent } from "./component/hotel-admin-view/hotel-admin-view/hotel-admin-view.component";
import {Step1Component} from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up-plans', component: SignUpPlansComponent},
  {path: 'sign-up-register', component: SignUpRegisterComponent},
  {path: 'add-payment', component: AddPaymentComponent},
  {path: 'room-services', component: RoomServicesComponent},
  {path: "hotel-admin-overview", component: HotelAdminViewComponent},
  {path: 'step-1', component:Step1Component},
  {path: 'step-2', component:Step2Component},

  {path: '', pathMatch: 'full', redirectTo: 'sign-in'},
  {path: '**', pathMatch: 'full', redirectTo: 'sign-in'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
