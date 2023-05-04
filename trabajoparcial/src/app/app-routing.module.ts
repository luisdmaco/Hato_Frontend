import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignInComponent } from "./component/sign-in/sign-in.component";
//temp
import { HotelAdminViewComponent } from "./component/hotel-admin-view/hotel-admin-view/hotel-admin-view.component";

const routes: Routes = [
  { path: "sign-in", component: SignInComponent },
  { path: "", pathMatch: "full", redirectTo: "hav-temp" /*'sign-in'*/ },
  { path: "**", pathMatch: "full", redirectTo: "hav-temp" /*'sign-in'*/ },

  { path: "hav-temp", component: HotelAdminViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
