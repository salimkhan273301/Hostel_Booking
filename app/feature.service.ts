import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private baseURL = "http://localhost:8080/api/v1/features";

  constructor(private httpClient:HttpClient) { }
 
  createFeature(feature: Feature): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, feature);
  }
  getFeatureList(): Observable<Feature[]>{
    return this.httpClient.get<Feature[]>(`${this.baseURL}`).pipe(map(Response=>Response))
  }


  updateFeature(id: number, feature: Feature): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, feature);
  }
  
  deleteFeature(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
