import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public welcome_message="";
  public message_class="";
  public active_session=false;
submit(username,password)
{
  if(username=="1196291" && password=="R@jdeep123")
  {
    this.welcome_message="Login successful";
    this.message_class="alert alert-success";
    this.active_session=true;
    }
  else
  {
    this.welcome_message="Invalid username or password";
    this.message_class="alert alert-warning";
  }
}
logout()
{
  this.active_session=false;
}
  constructor() { }

  ngOnInit() {
  }

}