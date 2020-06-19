import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-reviews',
  templateUrl: './admin-product-reviews.component.html',
  styleUrls: ['./admin-product-reviews.component.css']
})
export class AdminProductReviewsComponent implements OnInit {
  product: any;
  reviews: any;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params.id).subscribe(
        res => {
          this.product = res.result.product;
          this.reviews = this.product.reviews;
        }
      );
    });
  }

  approveReview(reviewId){
    this.productService.approveReview(this.product._id, reviewId).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }

}
