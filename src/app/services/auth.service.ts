import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) { 
    console.log(credentials);
    return this.http.post<any>('http://localhost:3000/login', credentials);
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    if (!token) return false;
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }
  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return false;
    return new JwtHelper().decodeToken(token).payload;
  }
}

