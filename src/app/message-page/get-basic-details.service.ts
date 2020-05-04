import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ICustomer} from './icustomer';
import {Observable} from 'rxjs';

@Injectable()
export class GetBasicDetailsService {
  public _url:string="./customerDetails.json"
  getBasicDetails():Observable<ICustomer[]>
  {
    return this.http.get<ICustomer[]>(this._url,{responseType: 'j'});
  }
  constructor(private http:HttpClient) { }

}