import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {
private full_name;
private full_address;
private dob;
private phone_number;
private username;
private password1;
private password2;

@Output()
public childEvent=new EventEmitter();

  submit(full_name,full_address,dob,phone_number,username,password1,password2){
  this.full_name=full_name;
  this.full_address=full_address;
  this.dob=dob;
  this.phone_number=phone_number;
  this.username=username;
  this.password1=password1;
  this.password2=password2;
  }
  fireEvent()
  {
    this.childEvent.emit(true);
  }
  close()
  {
    this._location.back();
  }
  constructor(private _location:Location) { 
    
  }

  ngOnInit() {
  }

}
