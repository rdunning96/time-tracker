import { Component, OnInit } from '@angular/core';
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
  public selectRoom(roomNum: number): void{
    console.log(roomNum);
  }

  public onRoomChange(room: any): void{
    console.log(room);
  }

}
