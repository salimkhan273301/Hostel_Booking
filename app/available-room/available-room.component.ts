import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-room',
  templateUrl: './available-room.component.html',
  styleUrls: ['./available-room.component.css']
})

export class AvailableRoomComponent implements OnInit {
  availablerooms:any;

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    let response=this.http.get("http://localhost:8080/api/v1/room/available");
    response.subscribe((data)=>this.availablerooms=data)
  }

}
