import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }
  //adduser
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user);

  }
  public forgot(user:any){
    return this.http.post(`${baseUrl}/forgot`,user);
  }

  public update(user:any){
    return this.http.put(`${baseUrl}/user/`,user);
  }


}
