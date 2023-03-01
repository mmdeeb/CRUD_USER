import { Component, OnInit } from '@angular/core';

import { AddUserService } from './add-user.service';
import { IAddUser } from './IAddUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  body:IAddUser[]=[];
  
  constructor(private adduserservice:AddUserService){}
  ngOnInit(): void {
  
  }
  saveUser(){


      this.adduserservice.addUser(this.body).subscribe({
        next: response => {
          console.log(response);
                
        },
        error: error => console.log(error)
      })

    }
  

}
