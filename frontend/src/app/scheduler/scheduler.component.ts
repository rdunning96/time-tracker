import { Time } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Booking } from '../_models/booking.model';
import { Room } from '../_models/room.model';
import { User } from '../_models/user.model';
import { BookingService } from '../_services/booking.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SchedulerComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService
  ) {}
  public selectedRoom: Room;
  public selectedDate: Date;
  public content: string = '';
  public date: Date = new Date();
  public time: number = 0;
  public description: string = 'This is a description';
  public duration: number = 0;
  public activeTab: string = 'profile';
  public ngOnInit(): void {}

  public roomSelected(e: any): void {
    this.selectedRoom = e.value;
  }

  public dateSelected(e: any): void {
    this.selectedDate = e;
  }

  public purchaseTime() {
    const user = this.tokenStorageService.getUser();
    const booking = new Booking(
      this.selectedDate,
      user.id,
      this.selectedRoom,
    );
    this.bookingService.createBooking(booking).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
