import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          //Save user data in localstorage
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      }));
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  isUserLoggedIn():boolean {
    return (localStorage.getItem('user') != null);
  }

  setCurrentUser(user: User):void {
    this.currentUserSource.next(user)
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
