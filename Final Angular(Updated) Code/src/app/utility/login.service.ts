import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registrationdemo } from './IRegistrationdemo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string="http://localhost:8080/login"
  constructor(private _httpClient:HttpClient) { }

  login:any;

  loginMethod(login: Registrationdemo)
  {
    return this._httpClient.post(this.baseUrl + "/",login);
  }
  
}
