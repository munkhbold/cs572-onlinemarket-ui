import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from '../model/product.model'

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts() { 
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.get<any>('http://localhost:3000/products', header);
  }

  getProductById(id: string) { 
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.get<any>(`http://localhost:3000/products/${id}`, header);
  }

  createProduct(product: Product) { 
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.post<any>(`http://localhost:3000/products/${product}`, header);
  }

  deleteProduct(product: Product) { 
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.delete<any>(`http://localhost:3000/products/${product._id}`, header);
  }

  updateProduct(product: Product) { 
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.put<any>(`http://localhost:3000/products/${product._id}`, header);
  }

  addItemsToCart(productId: string, quantity: number) {
    let token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Basic ${token}`)
    }
    return this.http.post<any>('http://localhost:3000/shopping-cart/update', {productId: productId, quantity: quantity} ,header);

  }


}
