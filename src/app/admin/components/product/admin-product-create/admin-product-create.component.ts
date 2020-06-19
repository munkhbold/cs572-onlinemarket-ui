import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    
  }
  createProduct(product) {
    product.imageUrl = [product.imageUrl];
    this.productService.createProduct(product).subscribe(
      res => {
        let productId = res.result.product._id;
        this.router.navigate(['/products', productId]);
      },
      err => {
        console.log(err);
      }
    )
  }
}
