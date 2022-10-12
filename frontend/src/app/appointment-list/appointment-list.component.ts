import { Component, OnInit } from '@angular/core';
import { Booking } from '../_models/booking.model';
import { BookingService } from '../_services/booking.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
//appointments
constructor(
  private userService: UserService,
  private bookingService: BookingService,
  private tokenStorageService: TokenStorageService
) {}
  public appointments: Booking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(
      (data) => {
        this.appointments = data;
      }
    );
  }

}
