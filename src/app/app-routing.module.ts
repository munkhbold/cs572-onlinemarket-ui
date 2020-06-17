import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './shop/components/core/core.component';
import { LoginComponent } from './shop/components/auth/login/login.component';
import { RegisterComponent } from './shop/components/auth/register/register.component';
import { ProductDetailComponent } from './shop/components/product-detail/product-detail.component';
import { ProductListComponent } from './shop/components/product-list/product-list.component';
import { AdminCoreComponent } from './admin/components/admin-core/admin-core.component';
import { AdminProductListComponent } from './admin/components/admin-product-list/admin-product-list.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [{
        path: '', component: ProductListComponent
      },
      {
        path: 'product-detail', component: ProductDetailComponent
      }]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin',
    component: AdminCoreComponent,
    children: [{
      path: '',
      component: AdminProductListComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
