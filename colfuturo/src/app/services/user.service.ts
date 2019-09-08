import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string= "http://localhost:3000/"; 

  constructor(private _httpclient:HttpClient) { }

  getUser(): Observable<any>{

    try {
        
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
     return this._httpclient.get(`${this.url}`, {headers:headers});
      
   } catch (error) {
     console.log(error); 
   }

  }

}
