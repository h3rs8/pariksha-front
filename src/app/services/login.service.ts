import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //current user which is logged in 

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }
  //save token to local storage

  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  // islogin: checks if user logged in or not
  public isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token=='' || token==null)
      return false;
    return true;
  }
  // logout: we remove token from localstorage

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  // get token
  public getToken(){
    return localStorage.getItem('token');
  }

  // setuser in localstorage

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  // get user
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // get user role

  public getUserRole(){
    let user =this.getUser();
    return user.authorities[0].authority;
  }
}
