import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  

  baseUrl:string="http://localhost:8080/event/";
  constructor(private _httpClient:HttpClient) { }


  addEvent(event:any)
  {
   return this._httpClient.post(this.baseUrl,event, { responseType:'JSON' as 'text'});
  }

  getData():Observable<Event>
  {
   
   return this._httpClient.get<Event>(this.baseUrl)
  }

  getById(id:number)
  {
    return this._httpClient.get<Event>(this.baseUrl+id);
  }

  updateEvent(id:number,event1:Event): Observable<Event>
  {
    return this._httpClient.put<Event>(this.baseUrl+id,event1);
  }

  delete(eventId:number)
  {
    return this._httpClient.delete(this.baseUrl+"delete/"+eventId,{ responseType:'JSON' as 'text'});
  }

  getDataByPrice(): Observable<Event>
  {
    return this._httpClient.get<Event>(this.baseUrl+"price")
  }

  //Display according to the OrganizerId:
  getEventById(id:number):Observable<any>
  {
    return this._httpClient.get<Event>(this.baseUrl + "getEventsById/"+id)
  }

}
