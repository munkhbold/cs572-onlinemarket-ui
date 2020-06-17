import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: any;
  productId: string;
  productName: string;
  productDescription: string;
  productQuantity: number;
  productImagesURLs: any;

  productReviews = [
    1, 2, 3
  ];

  constructor(private route: ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
    this.productQuantity = 1;
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(
        res => {
          this.product = res.result.product;
          this.productName = this.product.name;
          this.productDescription = this.product.description;
          this.productImagesURLs = this.product.imageUrl;
          this.productReviews = this.product.reviews;
          console.log(this.productImagesURLs);
          console.log(this.product);
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  addItemsToCart() {
    this.productService.addItemsToCart(this.productId, this.productQuantity).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  decreaseQuantity() {
    console.log('orson');
    this.productQuantity = Math.max(this.productQuantity - 1, 1);
  }
  increaseQuantity() {
    console.log('orson');
    this.productQuantity = Math.min(this.productQuantity + 1, 99);
  }
}
