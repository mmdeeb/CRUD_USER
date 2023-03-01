import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddUserService } from './add-user.service';
import { IAddUser } from './IAddUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  adduser:IAddUser[]=[];

  constructor(private adduserservice:AddUserService,private router:Router){}
  
  saveUser(){
      this.adduserservice.addUser(this.adduser).subscribe({
        next: response => {
          console.log(response);     
        },
        error: error => console.log(error)
      })
    }

    cancel(){
      this.router.navigate(['users'])
    }
}
