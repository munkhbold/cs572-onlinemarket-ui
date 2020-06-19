import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  createProduct(product) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.post<any>('http://localhost:3000/products', product, header);
  }

  updateProduct(productId, updatedProduct) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.put<any>(`http://localhost:3000/products/${productId}`, updatedProduct, header);
  }

  getProductsBySellerId(sellerId) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.get<any>(`http://localhost:3000/products?sellerId=${sellerId}`, header);
  }

  getProducts() {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.get<any>('http://localhost:3000/products', header);
  }

  getProductById(id: string) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.get<any>(`http://localhost:3000/products/${id}`, header);
  }

  addItemsToCart(productId: string, quantity: number) {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.post<any>('http://localhost:3000/shopping-cart/update', {productId, quantity} , header);

  }

  getItemsInCart() {
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.get<any>('http://localhost:3000/shopping-cart', header);
  }

  addReview(productId: string, comment: string){
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.post<any>(`http://localhost:3000/products/${productId}/reviews`, {comment}, header);
  }

  approveReview(productId: string, reviewId: string){
    const token = localStorage.getItem('token');
    const header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    };
    return this.http.put<any>(`http://localhost:3000/products/${productId}/reviews/${reviewId}/approve`, {}, header);
  }

}
