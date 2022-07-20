import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
roomlist:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get("http://localhost:8080/api/v1/findAllRooms");
    response.subscribe((data)=>this.roomlist=data)
  }

}
