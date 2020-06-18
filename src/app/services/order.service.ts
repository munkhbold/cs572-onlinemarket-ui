import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrdersByUser() {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.get<any>('http://localhost:3000/orders', header);
  }

  cancelOrder(orderId){
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.put<any>(`http://localhost:3000/orders/${orderId}`, {status: 'canceled'}, header);
  }
}
