import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: any;
  constructor(private productService: ProductService, private authService: AuthService, private router: Router, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    console.log(this.authService.currentUser);
    this.productService.getProductsBySellerId(this.authService.currentUser._id).subscribe(
      res => {
        this.products = res.result;
        console.log(this.products);
      },
      err => {
        console.log(err);
      }
    );
  }

  makeAction(productId, action){
    switch (action){
      case 'edit': this.router.navigate(['/admin/products', productId, 'update']); break;
      case 'reviews': this.router.navigate(['/admin/products', productId, 'reviews']); break;
      case 'delete': this.deleteProduct(productId);
      default: break;
    }
  }
  deleteProduct(productId) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete a product?')
    .then((confirmed) => {
        this.productService.deleteProduct(productId).subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            console.log(err);
          }
        );
      }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    this.ngOnInit();
  }
}
