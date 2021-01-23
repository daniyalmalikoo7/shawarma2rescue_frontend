import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL = 'http://localhost:3000/api/restaurants';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }




  getRestaurants(){
    return this.http.get(API_URL);
  }


  addRestaurant(data){

    return this.http.post(API_URL, data)
  }


}
