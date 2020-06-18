import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './shop/components/core/core.component';
import { ProductDetailComponent } from './shop/components/product-detail/product-detail.component';
import { ProductListComponent } from './shop/components/product-list/product-list.component';
import { AdminCoreComponent } from './admin/components/admin-core/admin-core.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminProductCreateComponent } from './admin/components/product/admin-product-create/admin-product-create.component';
import { AdminProductListComponent } from './admin/components/product/admin-product-list/admin-product-list.component';

import { RegisterComponent } from './auth/components/register/register.component';
import { ShoppingCartComponent } from './shop/components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';
import { CheckoutSuccessComponent } from './shop/components/checkout-success/checkout-success.component';
import { OrderListComponent } from './shop/components/order-list/order-list.component';

import { SellerCoreComponent } from './seller/components/seller-core/seller-core.component';
import { ListProductComponent } from './seller/components/list-product/list-product.component';
import { EditProductComponent } from './seller/components/edit-product/edit-product.component';
import { DeleteProductComponent } from './seller/components/delete-product/delete-product.component';
import { AddProductComponent } from './seller/components/add-product/add-product.component';



const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [{
        path: '', component: ProductListComponent
      },
      {
        path: 'products/:id', component: ProductDetailComponent
      },
      {
        path: 'shopping-cart', component: ShoppingCartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      },
      {
        path: 'checkout/done', component: CheckoutSuccessComponent
      },
      {
        path: 'order/history', component: OrderListComponent
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin',
    component: AdminCoreComponent,
    children: [
      {
        path: '',
        component: AdminProductListComponent
      },
      {
        path: 'products/create',
        component: AdminProductCreateComponent
      },

  ]
  },
  {
    path: 'seller',
    component: SellerCoreComponent,
    children: [
      {path: '', component: ListProductComponent},
      {path: 'add-product', component: AddProductComponent},
      {path: 'edit-product/:id', component: EditProductComponent},
      {path: 'delete-product/:id', component: DeleteProductComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
