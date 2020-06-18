import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from "@angular/router";
import {Product} from '../../../model/product.model'


@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
    products: Product[];
    constructor(private router: Router, private productService: ProductService, 
         public authService: AuthService) { 
            
         }

    ngOnInit() {
        
        this.productService.getProducts()
            .subscribe(data => {
                this.products = data.result;
            });
    }

    deleteProduct(product: Product): void {
        
        this.productService.deleteProduct(product)
            .subscribe(data => {
                this.products = this.products.filter(u => u !== product);
            })
    };

    

    
}
