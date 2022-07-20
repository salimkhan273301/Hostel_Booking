import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookroom } from '../bookroom';
import { BookroomService } from '../bookroom.service';


@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

bookroom: Bookroom = new Bookroom();
  constructor(private bookroomService: BookroomService,
    private router: Router) { }
    public msg="Room Booked  successfully"

  ngOnInit(): void {
  }

  saveBooking(){
    this.bookroomService.createBooking(this.bookroom).subscribe( (data) =>{
      
      console.log(data);
      
      alert(this.msg)
      this.goToBookList();
    },
    error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/booking']);
  }
  
  onSubmit(){
    console.log(this.bookroom);
    this.saveBooking();
  }
}
