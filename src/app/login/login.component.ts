import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private userData : LoginService,private router:Router){

  }
  ngOnInit(): void {
  }

  onSubmit() : void{
   this.userData.login(this.loginForm.value).subscribe(
    (result): void => {
      this.router.navigate(['users']);
    },
    (err:Error) => {
      alert(err.message);
    }
   )
    
  }
}
