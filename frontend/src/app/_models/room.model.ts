//room model
export class Room {
  _id: number;
  name: string;
  description: string;
  capacity: number;
  location: string;
  price: number;
  constructor(
    name: string,
    description: string,
    capacity: number,
    location: string,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.capacity = capacity;
    this.location = location;
    this.price = price;

  }
}
