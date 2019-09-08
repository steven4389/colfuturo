import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {sendEmail} from '../models/sendEmail'

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  public url: string= "http://localhost:3000/"; 

  constructor(private _httpclient:HttpClient) { }

  saveRegistro(_sendEmail:sendEmail): Observable<any>{
    
    let params = JSON.stringify(_sendEmail);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._httpclient.post(this.url + 'sendEmail', params, {headers: headers});
 }
}
