import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from './IComplaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  baseUrl:string="http://localhost:8080/complaint";
  constructor(private _httpClient:HttpClient) { }

  addComplaint(complaint:any)
  {
   return this._httpClient.post(this.baseUrl + "/",complaint, { responseType:'JSON' as 'text'});
  }

  getData():Observable<Complaint>
  {
   
   return this._httpClient.get<Complaint>(this.baseUrl + "/")
  }

  getComplaintById(id:number)
  {
    return this._httpClient.get<Complaint>(this.baseUrl + "/" +id);
  }

  updateComplaint(id:number,complaint1:Complaint): Observable<Complaint>
  {
    return this._httpClient.put<Complaint>(this.baseUrl+"/"+id,complaint1);
  }

  // delete(eventId:number)
  // {
  //   return this._httpClient.delete(this.baseUrl+"delete/"+eventId,{ responseType:'JSON' as 'text'});
  // }
}
