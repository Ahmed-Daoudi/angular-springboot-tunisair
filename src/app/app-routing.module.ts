import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

const routes: Routes = [
  {path:"flights", component: FlightListComponent},
  {path:"create-flight", component: CreateFlightComponent},
  {path:"update-flight/:id", component: UpdateFlightComponent},
  {path:"flight-details/:id", component: FlightDetailsComponent},

  {path: '', redirectTo: 'flights', pathMatch: 'full'} //even localhost:4200 we redirect to /flights
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
