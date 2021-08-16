import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private loggedIn = new BehaviorSubject<boolean>(this.isValid());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
  isValid() {
    if (localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }
  login(data: { email: string; password: string }) {
    return this.http.post(`${environment.baseUrl}/api/auth`, data);
  }
}
