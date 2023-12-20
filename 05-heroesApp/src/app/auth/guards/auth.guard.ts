import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {
  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  private checkAuthStatus() : boolean | Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap(
          isAuthenticated => console.log('Authenticated:', isAuthenticated)
        ),
        tap( isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['./auth/login']);
          }
        }),
        // tap(
        //   isAuthenticated => console.log('Authenticated:', isAuthenticated)
        // )
      )
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    // throw new Error('Method not implemented.');
    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // throw new Error('Method not implemented.');
    return this.checkAuthStatus();

  }

}
