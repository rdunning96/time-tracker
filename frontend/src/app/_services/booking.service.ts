//service to handle booking requests
//

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../_models/booking.model';
import { User } from '../_models/user.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
const API_URL = 'http://localhost:8080/api/bookings';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  //get all bookings
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(API_URL, httpOptions);
  }
  //get bookings by user
  getBookingsByUser(user: User): Observable<Booking[]> {
    return this.http.get<Booking[]>(API_URL + '/user/' + user.id, httpOptions);
  }
  //get bookings by date
  getBookingsByDate(date: Date): Observable<Booking[]> {
    return this.http.get<Booking[]>(
      API_URL + 'bookings/date/' + date,
      httpOptions
    );
  }
  //get bookings by date and user
  getBookingsByDateAndUser(date: Date, user: User): Observable<Booking[]> {
    return this.http.get<Booking[]>(
      API_URL + 'bookings/date/' + date + '/user/' + user.id,
      httpOptions
    );
  }

  //create booking
  createBooking(booking: Booking): Observable<Booking> {
    console.log(API_URL);
    console.log(booking);
    return this.http.post<Booking>(API_URL, booking, httpOptions);
  }
  //update booking
  updateBooking(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(
      API_URL + 'bookings/' + booking._id,
      booking,
      httpOptions
    );
  }
  //delete booking
  deleteBooking(booking: Booking): Observable<Booking> {
    return this.http.delete<Booking>(
      API_URL + 'bookings/' + booking._id,
      httpOptions
    );
  }
}
