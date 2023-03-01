import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo } from './Login-info';


import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginFailed!: boolean;
  loginInfo: LoginInfo = new LoginInfo();
  constructor(private userData: LoginService, private router: Router) {}
  loginUser(form: any): void {
    this.loginInfo = form.value;
    this.userData.login(this.loginInfo).subscribe(
      (result): void => {
        this.router.navigate(['users']);
      },
      (err: Error) => {
        this.loginFailed = true;
      }
    )  }
}
