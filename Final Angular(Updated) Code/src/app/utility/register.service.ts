import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registrationdemo } from './IRegistrationdemo';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  
  baseUrl:string="http://localhost:8080/registration"
  constructor(private _httpClient:HttpClient) { }

  register:any;

  //Register User:
  Register(register:any)
  {
    return this._httpClient.post(this.baseUrl + "/registerUser/",register,{responseType: 'JSON'as 'text'});
  }
  
  //Get RegisterUserEmail:
  getRegisteredUsersByEmail(email:string):Observable<Registrationdemo>{

      return this._httpClient.get<Registrationdemo>(this.baseUrl + "/getRegisterUserByEmail/"+email);
  
  }

  getUserById(id:number):any
  {
    // return this._httpClient.get(this.baseUrl + "/getRegisteredUserById/"+String(id));
    return this._httpClient.get(this.baseUrl + "/getRegisteredUserById/"+id);
  }

  getOrganizerById(id:number):any
  {
    // return this._httpClient.get(this.baseUrl + "/getRegisteredUserById/"+String(id));
    return this._httpClient.get(this.baseUrl + "/getRegisteredUserById/"+id);
  }

  

  updateUserprofile(registrationId:number,registrationdemo:Registrationdemo)
  {
    return this._httpClient.put(this.baseUrl+"/"+registrationId,registrationdemo,{responseType: 'JSON' as 'text'});
  }
  

}
