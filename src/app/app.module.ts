import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './approuting.module';

import { HomepageComponent } from './homepage/homepage.component';
import { SuccessfulLoginComponent } from './successful-login/successful-login.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { GetBasicDetailsService } from './message-page/get-basic-details.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule,AppRoutingModule ],
  declarations: [  HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GetBasicDetailsService]
})
export class AppModule { }
