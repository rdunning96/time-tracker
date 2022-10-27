import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/_models/room.model';
import { RoomService } from 'src/app/_services/room.service';

@Component({
  selector: 'app-admin-room-list',
  templateUrl: './admin-room-list.component.html',
  styleUrls: ['./admin-room-list.component.css']
})
export class AdminRoomListComponent implements OnInit {
  public rooms: Room[];
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  public getRooms(): void {
    //get rooms
    this.roomService.getRooms().subscribe({
      next: (data: any) => {
        this.rooms = data;
      }
    });
  }

  public deleteRoom(room: Room): void {
    //delete room
    this.roomService.deleteRoom(room._id.toString()).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}
