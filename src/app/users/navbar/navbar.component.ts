import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private loginService:LoginService){}
logout(){
  return this.loginService.logOut();
}
}
