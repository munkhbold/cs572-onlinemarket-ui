import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: any;
  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.currentUser);
    this.productService.getProductsBySellerId(this.authService.currentUser._id).subscribe(
      res => {
        this.products = res.result;
        console.log(this.products);
      },
      err => {

      }
    )
  }



}
