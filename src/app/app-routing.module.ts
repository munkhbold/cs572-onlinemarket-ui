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

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [{
        path: '', component: ProductListComponent
      },
      {
        path: 'product-detail', component: ProductDetailComponent
      },
      {
        path: 'shopping-cart', component: ShoppingCartComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
