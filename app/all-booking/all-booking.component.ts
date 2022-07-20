import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {
  allbooking:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get("http://localhost:8080/api/v1/booking");
    response.subscribe((data)=>this.allbooking=data)

  }
 
  


}
