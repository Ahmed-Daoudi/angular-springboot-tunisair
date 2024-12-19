import { FlightService } from '../flight.service';
import { Flight } from '../flight';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  flight: Flight = new Flight();
  submitted = false;

  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit() {
  }

  newFlight(): void {
    this.submitted = false;
    this.flight = new Flight();
  }

  save() {
    this.flightService.createFlight(this.flight).subscribe(
      data => {
        console.log(data);
        this.flight = new Flight();
        this.gotoList();
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/flights']); // to pass to the flight list components when we submit 
  }
}
