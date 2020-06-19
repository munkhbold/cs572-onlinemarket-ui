import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post<any>('http://localhost:3000/login', credentials);
  }

  register(credentials, role) {
    return this.http.post<any>(`http://localhost:3000/register/${role}`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    console.log('logged in');
    if (!token){
      return false;
    }
    const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return false; }
    return new JwtHelper().decodeToken(token).payload;
  }
}

