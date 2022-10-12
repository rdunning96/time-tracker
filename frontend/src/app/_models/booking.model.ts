import { User } from './user.model';

//booking model
export class Booking {
  _id?: number;
  dateCreated: Date;
  start: Date;
  end: Date;
  durationInHours: number;
  description: string;
  userId: number;
  constructor(
    dateCreated: Date,
    start: Date,
    end: Date,
    durationInHours: number,
    description: string,
    userId: number
  ) {
    this.dateCreated = dateCreated;
    this.start = start;
    this.end = end;
    this.durationInHours = durationInHours;
    this.description = description;
    this.userId = userId;
  }
}
