import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserDetails } from './IUserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private id: any;
  private Url: any;
  constructor(private http: HttpClient, private Arout: ActivatedRoute) {}

  getUser(): Observable<IUserDetails> {
    this.id = this.Arout.snapshot.paramMap.get('id')
    this.Url = `https://reqres.in/api/users/${window.location.href.split("/")[4]}`;
    return this.http.get<IUserDetails>(this.Url);
  }

}
