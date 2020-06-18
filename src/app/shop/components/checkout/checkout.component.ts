import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  itemsInCart: any;
  totalPriceInCart: number;
  displayTotalPriceInCart: number;
  numOfProductsInCart: number;
  userPoint: number;
  isPoint: boolean;
  isShippingAddress: boolean;
  addressValidation: any;
  addressData: any;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.userPoint = this.authService.currentUser.point;
    this.isShippingAddress = false;
    this.isPoint = false;
    this.addressValidation = {
      billingAddress: {
        city: false,
        state: false,
        street: false,
        zipCode: false
      },
      shippingAddress: {
        city: false,
        state: false,
        street: false,
        zipCode: false
      }
    };

    this.productService.getItemsInCart().subscribe(
      res => {
        this.itemsInCart = res.result.items;
        this.numOfProductsInCart = this.itemsInCart.length;
        this.totalPriceInCart = 0;
        for (let item of this.itemsInCart) {
          this.totalPriceInCart += item.quantity * item.product.unitPrice;
          item.product.description = item.product.description.substring(0, 30) + "..";
        }
        this.displayTotalPriceInCart = this.totalPriceInCart;
      },
      err => {
        console.log(err);
      }
    );
  }

  createCheckout(address) {
    console.log(address);
    this.addressData = {
      billingAddress: {
        city: address.city,
        state: address.state,
        street: address.street,
        zipCode: address.zipCode
      },
      shippingAddress: {
        city: this.isShippingAddress ? address.shippingCity : address.city,
        state: this.isShippingAddress ? address.shippingState : address.state,
        street: this.isShippingAddress ? address.shippingStreet : address.street,
        zipCode: this.isShippingAddress ? address.shippingZipCode : address.zipCode
      },
      isPoint: this.isPoint
    }
    this.orderService.createCheckout(this.addressData).subscribe(
      res => {
        this.router.navigate(['/checkout/done']);
      },
      err => {
        this.validateAddress();
      }
    )
  }

  changeTotalPrice() {
    if (this.isPoint) {
      this.displayTotalPriceInCart = Math.max(0, this.totalPriceInCart - this.userPoint / 10);
    }
    else {
      this.displayTotalPriceInCart = this.totalPriceInCart;
    }
  }

  validateAddress() {
    for (let addressType of ['billingAddress', 'shippingAddress']) {
      for (let bAddress in this.addressData[addressType]) {
        this.addressValidation[addressType][bAddress] = this.addressData[addressType][bAddress].length === 0 ? true : false;
      }
    }
  }

}
