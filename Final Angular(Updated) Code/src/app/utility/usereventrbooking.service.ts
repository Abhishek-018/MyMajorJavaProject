import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './IBooking';

@Injectable({
  providedIn: 'root'
})
export class UsereventrbookingService {
  baseUrl:string="http://localhost:8080/booking";
  constructor(private _httpClient:HttpClient) { }

 userEventBooking(booking:any){
  return this._httpClient.post(this.baseUrl + "/",booking,{responseType: 'JSON' as 'text'});
 }
 getById(id:number):Observable<any>{
  return this._httpClient.get<Booking>(this.baseUrl+"/"+id);
 }
//  getbookinghistory():Observable<Booking>
//   {
   
//    return this._httpClient.get<Booking>(this.baseUrl + "/")
//   }

  getData():Observable<Booking>
  {
   
   return this._httpClient.get<Booking>(this.baseUrl + "/")
  }

  updateBooking(id:number,booking1:Booking): Observable<Booking>
  {
    return this._httpClient.put<Booking>(this.baseUrl+"/"+id,booking1);
  }

  getBookingById(id:number):Observable<any>
  {
    return this._httpClient.get<Booking>(this.baseUrl + "/getBookingById/"+id)
  }

  getOrganizerBookingById(id:number):Observable<any>
  {
    return this._httpClient.get<Booking>(this.baseUrl + "/getOrganizerBookingById/"+id)
  }
}
