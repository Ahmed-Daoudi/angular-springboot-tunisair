import { Flight } from '../flight';
import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from '../flight.service';
import { FlightListComponent } from '../flight-list/flight-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  id!: number;
  flight!: Flight;

  constructor(private route: ActivatedRoute, private router: Router,
    private flightService: FlightService) { }

  ngOnInit() {
    this.flight = new Flight();

    this.id = this.route.snapshot.params['id'];

    this.flightService.getFlight(this.id)
      .subscribe(data => {
        console.log(data);
        this.flight = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['flights']);
  }
}
