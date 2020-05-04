import { Injectable } from '@angular/core';

@Injectable()
export class GetBasicDetailsService {
  getBasicDetails()
  {
    return[
      {"name":"Rajdeep Bhadra","address":"vanasthalipuram hyderabad","DOB":"05-11-1994","phone":"9051853822","username":"Rajdeep123"}
    ];
  }
  constructor() { }

}