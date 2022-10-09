import { User } from './user.model';

//booking model
export class Booking {
  id: number;
  date: Date;
  time: number;
  description: string;
  duration: number;
  user: User;
  userId: number;
  constructor(
    id: number,
    date: Date,
    time: number,
    description: string,
    duration: number,
    user: User
  ) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.description = description;
    this.duration = duration;
    this.user = user;
    this.userId = user.id;
  }
}
