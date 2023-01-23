import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string="http://localhost:8080/category";

  //Add Category from Backend:
  addCategory(category:any)
  {
      return this._httpClient.post(this.baseUrl + "/",category,{responseType: 'JSON' as 'text'});
  }

  //Get All Categories from Backend:
  getData():Observable<Category>
  {
      return this._httpClient.get<Category>(this.baseUrl + "/");
  }

  //Get CategoryById from Backend:
  getCategoryById(categoryId:number)
   {
    
     return this._httpClient.get(this.baseUrl+"/"+categoryId);
   }

  //Edit Category By Id:
  editCategory(categoryId:number,category:Category)
  {
    return this._httpClient.put(this.baseUrl+"/"+categoryId,category,{responseType: 'JSON' as 'text'});
  }

  //Delete Category By Id:
  deleteCategory(categoryId:number)
  {
    return this._httpClient.delete(this.baseUrl+"/"+categoryId,{responseType: 'JSON' as "text"});
  }


}
