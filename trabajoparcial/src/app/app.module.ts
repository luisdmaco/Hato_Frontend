import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";

import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpPlansComponent } from './component/sign-up-plans/sign-up-plans.component';
import { MatInputModule } from '@angular/material/input';
import { SignUpRegisterComponent } from './component/sign-up-register/sign-up-register.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { RoomServicesComponent } from './component/room-services/room-services.component';
import { TableComponent } from "./component/hotel-admin-view/table/table.component";
import { HotelAdminViewComponent } from "./component/hotel-admin-view/hotel-admin-view/hotel-admin-view.component";
import { ToolbarComponent } from "./component/hotel-admin-view/toolbar/toolbar.component";
import { FormComponent } from "./component/hotel-admin-view/form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpPlansComponent,
    SignUpRegisterComponent,
    AddPaymentComponent,
    RoomServicesComponent,
    TableComponent,
    HotelAdminViewComponent,
    ToolbarComponent,
    FormComponent,
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
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
