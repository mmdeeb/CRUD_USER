import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { LoginErrorComponent } from './login/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginErrorComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot([
     
      {path:"login" , component:LoginComponent }, 
      /* general */
      {path:"**" , component:LoginComponent },
      {path:'' , redirectTo:'login', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
