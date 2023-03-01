import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from './IUser';

import { UserService } from './user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
 
  users :any ;
  sub!: Subscription;
  imgWidth : number = 50;
  imgMargin : number = 2;
  page : number=1;
  total:number=0;
  constructor(private userService:UserService, private router: Router,private activrout: ActivatedRoute){}
  ngOnInit(): void{
    this. getUsers();
  }

  getUsers():void{
    this.sub = this.userService.getUser().subscribe({
      next: users => {console.log(users);
      this.users = users;
      }    
      });
  }
  onPageChange(event : any){
    this.page = event;
    this.getUsers();
  }
   ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  naviagtePage(i:any){
    console.log(i)
    var  str=window.location.href.toString()
    var url=""
    var arr=str.split("/")
    if(arr[arr.length-1]=="users")
    {
      url=arr.join("/")+"/"+(i+1)
    }
    else
    {
      arr[arr.length-1]=(i+1)
      url=arr.join("/")
    }
    window.location.href=url;
  
  }
  
}
