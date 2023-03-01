import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = Number(route.paramMap.get('id'));
    if (isNaN(id) || id > 12) {
      alert('Ther is no more users');
      this.router.navigate(['/users']);
      return false;
    }
    if (isNaN(id) || id <= 0) {
      alert('Enter a valid ID');
      this.router.navigate(['/users']);
      return false;
    }
    return true;
  }

}
