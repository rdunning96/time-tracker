//room service
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../_models/room.model';

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    private baseUrl = 'http://localhost:8080/api/rooms';

    constructor(private http: HttpClient) { }

    public getRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(`${this.baseUrl}`);
    }
    //add rooms
    public addRoom(room: Room): Observable<Room> {
        return this.http.post<Room>(`${this.baseUrl}`, room);
    }
    //delete rooms
    public deleteRoom(id: string): Observable<Room> {
        return this.http.delete<Room>(`${this.baseUrl}/${id}`);

    }
}
