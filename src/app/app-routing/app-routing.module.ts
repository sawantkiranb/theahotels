import { SignupComponent } from './../auth/signup/signup.component';
import { SigninComponent } from './../auth/signin/signin.component';
import { LifestyleComponent } from './../lifestyle/lifestyle.component';
import { WeddingsComponent } from './../weddings/weddings.component';
import { OffersComponent } from './../offers/offers.component';
import { FoodBeverageComponent } from './../food-beverage/food-beverage.component';
import { CelebrationsComponent } from './../celebrations/celebrations.component';
import { AccomodationComponent } from './../accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-and-beverage', component: FoodBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
