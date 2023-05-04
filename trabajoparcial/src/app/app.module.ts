import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignInComponent } from './component/sign-in/sign-in.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPlansComponent } from './component/sign-up-plans/sign-up-plans.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignUpRegisterComponent } from './component/sign-up-register/sign-up-register.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { RoomServicesComponent } from './component/room-services/room-services.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpPlansComponent,
    SignUpRegisterComponent,
    AddPaymentComponent,
    RoomServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
