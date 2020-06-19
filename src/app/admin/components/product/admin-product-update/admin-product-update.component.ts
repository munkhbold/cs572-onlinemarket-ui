import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.css']
})
export class AdminProductUpdateComponent implements OnInit {
  
  productName: string;
  productUnitPrice: number;
  productImageUrl: string;
  productDescription: string;
  productId: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(
        res => {
          this.productName = res.result.product.name;
          this.productUnitPrice = res.result.product.unitPrice;
          this.productDescription = res.result.product.description;
          this.productImageUrl = res.result.product.imageUrl[0];
          console.log(this.productImageUrl);
        },
        err => {
          console.log(err);
        }
      )
    });
  }
  updateProduct() {
    let updatedProduct = {
      name: this.productName,
      description: this.productDescription,
      imageUrl: [this.productImageUrl],
      unitPrice: this.productUnitPrice
    };
    this.productService.updateProduct(this.productId, updatedProduct).subscribe(
      res => {
        this.router.navigate(['/products', this.productId]);
      },
      err => {
        console.log(err);
      }
    );
  }

}
