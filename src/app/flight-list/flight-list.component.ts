import { FlightDetailsComponent } from '../flight-details/flight-details.component';
import { Observable } from "rxjs";
import { FlightService } from "../flight.service";
import { Flight } from '../flight'; 
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-flight-list",
  templateUrl: "./flight-list.component.html",
  styleUrls: ["./flight-list.component.css"]
})

export class FlightListComponent implements OnInit {
  flights: Observable<Flight[]> | undefined;

  constructor(private flightService: FlightService,
    private router: Router) {}

  ngOnInit() {
    this.reloadFlights();
  }

  reloadFlights() {
    this.flights = this.flightService.getFlightsList();
  }

  deleteFlight(id: number) {
    this.flightService.deleteFlight(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadFlights();
        },
        error => console.log(error));
  }

  updateFlight(id: number){
     this.router.navigate(['update-flight', id]);
  }

  flightDetails(id: number){
    this.router.navigate(['flight-details', id]);
  }
}

