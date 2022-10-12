import { Time } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Booking } from '../_models/booking.model';
import { User } from '../_models/user.model';
import { BookingService } from '../_services/booking.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchedulerComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService
  ) {}

  public content: string = '';
  public date: Date = new Date();
  public time: number = 0;
  public description: string = 'This is a description';
  public duration: number = 0;
  public activeTab: string = 'profile';
  public ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      },
    });
  }

  public purchaseHours(hours: number): void {
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
