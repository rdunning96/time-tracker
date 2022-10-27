import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/_models/room.model';
import { RoomService } from 'src/app/_services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  //room name, description, capacity
  public roomPrice: number = 0;
  public roomName: string = "";
  public roomDescription: string = "";
  public roomCapacity: number = 0;
  public roomLocation: string = "";
  public roomForm: FormGroup = new FormGroup({
    roomName: new FormControl(this.roomName, Validators.required),
    roomDescription: new FormControl(this.roomDescription, Validators.required),
    roomCapacity: new FormControl(this.roomCapacity, Validators.required),
    roomLocation: new FormControl(this.roomLocation, Validators.required)
  });
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    // this.roomForm = new FormGroup({
    //   roomName: new FormControl(this.roomName, Validators.required),
    //   roomDescription: new FormControl(this.roomDescription, Validators.required),
    //   roomCapacity: new FormControl(this.roomCapacity, Validators.required)
    // });
  }
  
  public onSubmit(): void {
    //create room
    var room = new Room(
      this.roomName,
      this.roomDescription,
      this.roomCapacity,
      this.roomLocation,
      this.roomPrice,
    );
    this.roomService.addRoom(room).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
    console.log(this.roomForm.value);
  }

}
