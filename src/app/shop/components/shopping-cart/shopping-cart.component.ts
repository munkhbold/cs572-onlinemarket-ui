import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: any;
  totalPrice: number;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getItemsInCart().subscribe(
      res => {
        this.items = res.result.items;
        this.totalPrice = 0;
        console.log(this.items);
        for (let item of this.items) {
          
          this.totalPrice += item.quantity * item.product.unitPrice;
          item.product.description = item.product.description.substring(0, 100) + " [...]";
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  cancelProduct(prodId) {
    this.productService.addItemsToCart(prodId, 0).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    )
  }

}
