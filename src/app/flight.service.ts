import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = 'http://localhost:9090/springboot-crud-rest/api/v1/flights';

  constructor(private http: HttpClient) { }

  getFlight(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, flight);
  }

  updateFlight(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFlight(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFlightsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
