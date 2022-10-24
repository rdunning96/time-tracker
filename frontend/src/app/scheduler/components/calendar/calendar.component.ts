import { Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public date: Date = new Date();
  @Output() public dateSelected: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onDateChange(e: any): void {
    this.date = e.value;
    this.dateSelected.emit(this.date);
  }

}
