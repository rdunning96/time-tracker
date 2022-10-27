import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/_models/booking.model';
import { Room } from 'src/app/_models/room.model';
import { BookingService } from 'src/app/_services/booking.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css'],
})
export class TimeListComponent implements OnInit, DoCheck {
  public times: number[] = [1, 8, 40];
  public timePrices: number[] = [];
  public selectedTime: number;

  @Input() public room: Room;
  @Output() public timeSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private userService: UserService,
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService
  ) { }


  public ngOnInit(): void {
    this.timePrices = [];
  }

  public ngDoCheck(): void {
  }

  public onTimeChange(time: any): void {
    this.selectedTime = time;
    this.timeSelected.emit(this.selectedTime);
  }
}
