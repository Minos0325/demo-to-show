import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  CanDeactivate,
  CanActivateChild
} from '@angular/router';


import { Observable, of } from 'rxjs';
import { map, timeout, catchError, filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  urlArr = [];    // 可访问路径
  id: any;
  sqlaTablesMap: any;
  constructor(
    private authService: AuthService, private router: Router, private route: ActivatedRoute
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (state.url === '/main/maintenance') {
      return of(true);
    }
    return of(true);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
}
