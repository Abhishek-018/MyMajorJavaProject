import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from './IOffer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  // offer:any;
  baseUrl:string="http://localhost:8080/offer";
  constructor(private _httpClient:HttpClient) { }

  addOffer(offerId:any)
  {
      return this._httpClient.post(this.baseUrl + "/",offerId,{responseType: 'JSON' as 'text'});
  }

  //Get All Categories from Backend:
  getData():Observable<Offer>
  {
    // return this._httpClient.get("https://reqres.in/api/users?page=2");
        // return this._httpClient.get(this.baseUrl + "/");

        return this._httpClient.get<Offer>(this.baseUrl + "/");
  }

  //Get CategoryById from Backend:
  getOfferById(offerId:number)
   {
    
     return this._httpClient.get(this.baseUrl+"/"+offerId);
   }

  editOffer(offerId:number,offer1:Offer)
  {
    return this._httpClient.put(this.baseUrl+"/"+offerId,offer1,{responseType: 'JSON' as 'text'});
  }

  deleteOffer(offerId:number)
  {
    return this._httpClient.delete(this.baseUrl+"/delete/"+offerId,{responseType: 'JSON' as "text"});
  }

  //To display offers according to the organizerId:
  getOfferByOrganizerId(id:number):Observable<any>
  {
    return this._httpClient.get(this.baseUrl + "/getOfferById/"+id);
  }

}
