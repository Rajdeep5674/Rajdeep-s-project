import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage/homepage.component';
import { SuccessfulLoginComponent } from './successful-login/successful-login.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'SuccessfulLogin' , component: SuccessfulLoginComponent},
      { path: 'MessagePage' , component: MessagePageComponent},
      { path: 'CreateUserPage' , component: CreateUserPageComponent},
      { path: 'root' , component: AppComponent}
    ])
  ],
  declarations: [HomepageComponent,SuccessfulLoginComponent,MessagePageComponent,CreateUserPageComponent,AppComponent],
  exports:[
    RouterModule,
  ],
  providers:[],
})
export class AppRoutingModule { }
