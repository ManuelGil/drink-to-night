import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, catchError, map, of } from 'rxjs';

import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService implements OnDestroy {
  private usersUrl = 'api/users/';
  private unsubscribe: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  getCurrentAuth(): AuthModel | undefined {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.credentials) {
      this.logout();
      return undefined;
    }

    return auth;
  }

  // public methods
  login(email: string, password: string): Observable<AuthModel | undefined> {
    return this.http.get<AuthModel[]>(this.usersUrl).pipe(
      map((result: AuthModel[]) => {
        if (result.length <= 0) {
          return undefined;
        }

        const auth = result.find(user => {
          console.log('user', user);
          return (
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password
          );
        });

        if (!auth) {
          return undefined;
        }

        this.setAuthFromLocalStorage(auth);
        return auth;
      }),
      catchError(err => {
        console.error('err', err);
        return of(undefined);
      }),
    );
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/auth/login']);
  }

  // private methods
  private setAuthFromLocalStorage(auth: AuthModel): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth) {
      localStorage.setItem('auth', JSON.stringify(auth));
      return true;
    }
    return false;
  }

  private getAuthFromLocalStorage(): AuthModel | undefined {
    try {
      const lsValue = localStorage.getItem('auth');
      if (!lsValue) {
        return undefined;
      }
      const authData = JSON.parse(lsValue);
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
}
