import { Room } from './room.model';
import { User } from './user.model';

//booking model
export class Booking {
  _id?: number;
  date: Date;
  user: number;
  room: Room;
  constructor(
    date: Date,
    user: number,
    room: Room
  ) {
    this.date = date;
    this.user = user;
    this.room = room;
  }
}
