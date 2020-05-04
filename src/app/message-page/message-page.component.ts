import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit {
public message="";
viewBasicDetails()
{
  this.message="View Basic Details";
}
checkAccountBalance()
{
  this.message="account balance can be checked here";
}
fundTransfer()
{
  this.message="fundtransfer can be done here";
}
editBasicDeatils()
{
  this.message="Basic details can be edited here.";
}
pinChange()
{
  this.message="Your security pin can be changed here.";
}
more()
{
  this.message="Many more to come";
}
  constructor() { }

  ngOnInit() {
  }

}