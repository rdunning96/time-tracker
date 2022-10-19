import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/_models/room.model';
import { RoomService } from 'src/app/_services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  //rooms variable
  public rooms$: Observable<Room[]> | undefined;
  public selectedRoom: Room | undefined;
  @Output() public roomSelected: EventEmitter<Room> = new EventEmitter<Room>();
  
  constructor(private roomService: RoomService) { }

  public ngOnInit(): void {
    this.makeTestRooms();
  }
  // make test rooms
  public makeTestRooms(): void{
    this.rooms$ = this.roomService.getRooms();
  }
  
  public onRoomChange(room: any): void{
    //set selected room
    this.selectedRoom = room;
    //emit selected room
    this.roomSelected.emit(this.selectedRoom);
  }

}
