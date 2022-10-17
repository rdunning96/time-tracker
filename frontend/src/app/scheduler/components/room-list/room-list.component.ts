import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from 'src/app/_models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  //rooms variable
  public rooms: Room[] = [];
  public selectedRoom: Room | undefined;
  @Output() public roomSelected: EventEmitter<Room> = new EventEmitter<Room>();
  
  constructor() { }

  public ngOnInit(): void {
    this.makeTestRooms();
  }
  // make test rooms
  public makeTestRooms(): void{
    this.rooms = [
      //name, description, capacity, location
      new Room('Room 1', 'This is room 1', 10, 'This is the location'),
      new Room('Room 2', 'This is room 2', 10, 'This is the location'),
      new Room('Room 3', 'This is room 3', 10, 'This is the location'),
    ];
  }
  
  public onRoomChange(room: any): void{
    //set selected room
    this.selectedRoom = room;
    //emit selected room
    this.roomSelected.emit(this.selectedRoom);
  }

}
