import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }
  createProduct(product) {
    product.imageUrl = [product.imageUrl];
    this.productService.createProduct(product).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
