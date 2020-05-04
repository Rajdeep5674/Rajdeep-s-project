import { Injectable } from '@angular/core';

@Injectable()
export class GetBasicDetailsService {
  getBasicDetails()
  {
    return[
      {"name":"Rajdeep Bhadra","DOB":"05-11-1994","phone":"9051853822"},
      {"name":"Debashish Choudhary","DOB":"05-11-1994","phone":"8562547845"}
    ];
  }
  constructor() { }

}