import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/_models/booking.model';
import { BookingService } from 'src/app/_services/booking.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
//bookings
constructor(
  private userService: UserService,
  private bookingService: BookingService,
  private tokenStorageService: TokenStorageService
) {}
  public bookings: Booking[] = [];

  ngOnInit(): void {
    this.getCurrentUserBookings();
  }

  public getCurrentUserBookings(): void {
    const user = this.tokenStorageService.getUser();
    this.bookingService.getBookingsByUser(user).subscribe(
      (data) => {
        this.bookings = data;
      }
    );
  }

}
