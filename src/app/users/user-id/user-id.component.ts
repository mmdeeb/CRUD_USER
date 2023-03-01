import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../users-list/IUser';
import { GetUserService } from './get-user.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  title ='hello';
  User : IUser[] | undefined;

  constructor(private route:ActivatedRoute,private getUserService:GetUserService){
    console.log(route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
   
  }

}
