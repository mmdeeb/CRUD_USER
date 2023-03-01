import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';







@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    AddUserComponent,
    NavbarComponent,
    FooterComponent
   
   
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,

    ReactiveFormsModule,
    RouterModule.forChild([ 
      {path:'users' , component:UsersListComponent},    
      {path:'users/:id' , component:UsersListComponent}, 
      {path: 'user/:id',component:UserDetailsComponent},
      {path: 'adduser',component:AddUserComponent},
      
      
      
    ])
  ],
  exports:[FormsModule, ReactiveFormsModule],
  bootstrap:[UsersListComponent]
})
export class UsersModule { }
