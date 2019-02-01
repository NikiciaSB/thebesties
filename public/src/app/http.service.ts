import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getallusers(){
    return this._http.get('users')
  }
  loginUser(loginuser){
    return this._http.post('login', loginuser)
  }
  createUser(newuser){
    return this._http.post('register', newuser)
  }
  getUser(id){
    return this._http.get('main'+ id)
  }
}