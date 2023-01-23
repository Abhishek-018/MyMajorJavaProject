import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl:string="http://localhost:8081/feedback"
  constructor(private _httpClient:HttpClient) { }

  //feedbacks:any;
  addFeedback(feedback:any)
  {
    return this._httpClient.post(this.baseUrl + "/",feedback,{responseType: 'JSON'as 'text'});
  }
}
