import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  itemsInCart: any;
  totalPriceInCart: number;
  numOfProductsInCart: number;
  constructor(private productService: ProductService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getItemsInCart().subscribe(
      res => {
        this.itemsInCart = res.result.items;
        this.numOfProductsInCart = this.itemsInCart.length;
        this.totalPriceInCart = 0;
        for (let item of this.itemsInCart) {
          this.totalPriceInCart += item.quantity * item.product.unitPrice;
          item.product.description = item.product.description.substring(0, 30) + "..";
        }
        console.log(this.itemsInCart);
      },
      err => {
        console.log(err);
      }
    );
  }

  createCheckout(address) {
    let addresses = {
      billingAddress: {
        city: address.city,
        state: address.state,
        street: address.street,
        zipCode: address.zipCode
      },
      shippingAddress: {
        city: address.city,
        state: address.state,
        street: address.street,
        zipCode: address.zipCode
      }
    }
    this.orderService.createCheckout(addresses).subscribe(
      res => {
        this.router.navigate(['/checkout/done']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
