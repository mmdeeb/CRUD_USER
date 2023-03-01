import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string ='https://reqres.in/api/login';
  constructor(private http : HttpClient, private router : Router) { }

  saveUser(data : any){
    return this.http.post(this.url,data)
  };

  setToken(token:string):void{
    localStorage.setItem('token', token);
  }

  getToken():string | null{
    return localStorage.getItem('token')
  }


  isLoggedIn(){
    return this.getToken!= null;
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({email , password}: any): Observable<any>{
    if (email === 'eve.holt@reqres.in' && password==='cityslicka') {
      this.setToken('QpwL5tke4Pnpja7X4');
      return of({name : 'mohammed' , email:'eve.holt@reqres.in'})
    }
    return throwError(() => new Error('Filed login'));

  }

}
