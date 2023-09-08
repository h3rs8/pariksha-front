import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories() {
    return this._http.get(`${baseUrl}/category/`);
  }
  constructor(private _http:HttpClient) {
    this.categories();   
   }
   //add new category
   public addCategory(category:any){
    return this._http.post(`${baseUrl}/category/`,category);
   }
}
