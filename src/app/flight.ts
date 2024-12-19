export enum FlightType {
    DIRECT_PASSENGER,
    TRANSITION_PASSENGER,
    CARGO,
  }
  
  export class Flight {
    id: number = 0;
    departTime: string = "";
    depart: string = "";
    destination: string="";
    flightType: FlightType=FlightType.DIRECT_PASSENGER;
  }