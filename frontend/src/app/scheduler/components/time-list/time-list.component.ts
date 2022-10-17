import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/_models/booking.model';
import { BookingService } from 'src/app/_services/booking.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css'],
})
export class TimeListComponent implements OnInit {
  public times: number[] = [1, 8, 40];
  public selectedTime: number | undefined;

  @Output() public timeSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private userService: UserService,
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService
  ) {}


  public ngOnInit(): void {}

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

  public onTimeChange(time: any): void {
    this.selectedTime = time;
    this.timeSelected.emit(this.selectedTime);
  }
}
