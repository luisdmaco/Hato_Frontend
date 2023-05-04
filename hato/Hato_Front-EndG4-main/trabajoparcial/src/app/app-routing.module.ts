import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step2Component } from './component/step2/step2.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import {Step1Component} from './component/step1/step1.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'step-1', component:Step1Component},
  {path: 'step-2', component:Step2Component},
  {path: '', pathMatch: 'full', redirectTo: 'sign-in'},
  {path: '**', pathMatch: 'full', redirectTo: 'sign-in'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
