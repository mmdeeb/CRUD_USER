import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { IListUser } from './IUsersList';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit  {

 private apiUrl = "https://reqres.in/api/users?page=1";

 constructor(private http: HttpClient) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//  getUsers(page: number){
//    return this.httpClient.get(this.url + '?page=' + page);
//  } 


  getUser(): Observable<IListUser[]> {
     this.apiUrl=`https://reqres.in/api/users?page=${window.location.href.split("/")[4]}`;
     console.log(this.apiUrl);
  return this.http.get<IListUser[]>  (this.apiUrl);
  }
}
