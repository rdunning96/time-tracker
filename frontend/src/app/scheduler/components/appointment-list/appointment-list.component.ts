import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/_models/booking.model';
import { BookingService } from 'src/app/_services/booking.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

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
