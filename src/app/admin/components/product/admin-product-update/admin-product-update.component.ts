import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

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
              private route: ActivatedRoute) { }

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
    // this.productService.getProductById
    // this.product.sub
    // this.data = "hello";
  }
  updateProduct() {
    console.log(this.productImageUrl);
    // product.imageUrl = [product.imageUrl];
    // this.productService.createProduct(product).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
  }

}
