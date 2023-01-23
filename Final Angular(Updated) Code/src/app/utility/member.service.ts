import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registrationdemo } from './IRegistrationdemo';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:string="http://localhost:8080/registration";

  //Get All Categories from Backend:
  getData():Observable<Registrationdemo>
  {
    // return this._httpClient.get("https://reqres.in/api/users?page=2");
        // return this._httpClient.get(this.baseUrl + "/");

        return this._httpClient.get<Registrationdemo>(this.baseUrl + "/getAllRegisteredUser");
  }

  getOrganizer():Observable<Registrationdemo>
  {
    return this._httpClient.get<Registrationdemo>(this.baseUrl + "/getByOrganizer")
  }

  getUser():Observable<Registrationdemo>
  {
    return this._httpClient.get<Registrationdemo>(this.baseUrl + "/getByUser")
  }
  
  delete(registrationId:number)
  {
    return this._httpClient.delete(this.baseUrl+"/"+registrationId,{responseType: 'JSON' as "text"});
  }

}
