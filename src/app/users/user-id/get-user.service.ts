import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListUser } from '../users-list/IUsersList';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
private url = 'https://reqres.in/api/users/2';
  constructor(private http:HttpClient) { }

  getUserById():Observable<IListUser[]>{
    return this.http.get<IListUser[]> (this.url);
  }

}
