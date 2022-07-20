import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseURL = "http://localhost:8080/api/v1/contacts";

  constructor(private httpClient: HttpClient) { }

    
  createContact(contact: Contact): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, contact);
  }
}
