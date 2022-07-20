import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
  contact: Contact = new Contact();
  constructor(private contactService: ContactService,
    private router: Router) { }
    public msg="Customer Query Added successfully"

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe( data =>{
      console.log(data);
      alert(this.msg)
      this.goToHome();
    },
    error => console.log(error));
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
  
  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }

}
