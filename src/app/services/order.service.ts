import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  createCheckout(addresses) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.post<any>('http://localhost:3000/orders', addresses , header);
  }

  getOrdersByUser() {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.get<any>('http://localhost:3000/orders/history', header);
  }

  getOrders() {
    const user = this.auth.currentUser;
    const queryParams: any = {};

    if (user.role === 'seller') {
      queryParams.sellerId = user._id;
    }
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`),
      params: queryParams
    };

    return this.http.get<any>(`http://localhost:3000/orders`, header);
  }

  changeOrderStatus(orderId, status){
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.put<any>(`http://localhost:3000/orders/${orderId}`, {status}, header);
  }

  cancelOrder(orderId){
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.delete<any>(`http://localhost:3000/orders/${orderId}/cancel`, header);
  }
}
