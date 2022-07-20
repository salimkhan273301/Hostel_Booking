import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookroom } from './bookroom';

@Injectable({
  providedIn: 'root'
})
export class BookroomService {
[x: string]: any;

 

private baseURL = "http://localhost:8080/api/v1/roombook";

constructor(private httpClient: HttpClient) { }



createBooking(bookroom:Bookroom ): Observable<any>{
  return this.httpClient.post(`${this.baseURL}`, bookroom);
}

}