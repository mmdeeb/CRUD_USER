import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddUser } from './IAddUser';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private Url = "https://reqres.in/api/users";
  
  constructor(private http: HttpClient) { }

  addUser(body : IAddUser[]) :Observable<IAddUser[]> {
    return this.http.post<IAddUser[]>(this.Url,body);}

    
}
