//room model
export class Room {
  _id?: number;
  name: string;
  description: string;
  capacity: number;
  location: string;
  constructor(
    name: string,
    description: string,
    capacity: number,
    location: string
  ) {
    this.name = name;
    this.description = description;
    this.capacity = capacity;
    this.location = location;
  }
}
