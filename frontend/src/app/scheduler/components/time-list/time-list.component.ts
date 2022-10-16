import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/_models/booking.model';
import { BookingService } from 'src/app/_services/booking.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
  }

  public purchaseHours(hours: number): void{
    const user = this.tokenStorageService.getUser();
    const booking = new Booking(
      new Date(),
      new Date(),
      new Date(),
      hours,
      'This is a description',
      user.id
    );
    console.log(user);
    this.bookingService.createBooking(booking).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

}
