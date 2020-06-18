import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createCheckout(addresses) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.post<any>('http://localhost:3000/orders', addresses , header);

  }
}
