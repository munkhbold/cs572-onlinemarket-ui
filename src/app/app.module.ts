import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './shop/components/core/core.component';
import { HeaderComponent } from './shop/components/header/header.component';
import { FooterComponent } from './shop/components/footer/footer.component';
// import { RegisterComponent } from './shop/components/auth/register/register.component';
import { ProductDetailComponent } from './shop/components/product-detail/product-detail.component';
import { ProductListComponent } from './shop/components/product-list/product-list.component';
import { AdminCoreComponent } from './admin/components/admin-core/admin-core.component';
import { AdminHeaderComponent } from './admin/components/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/components/admin-footer/admin-footer.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import { AdminProductCreateComponent } from './admin/components/product/admin-product-create/admin-product-create.component';
import { AdminProductListComponent } from './admin/components/product/admin-product-list/admin-product-list.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ShoppingCartComponent } from './shop/components/shopping-cart/shopping-cart.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';
import { CheckoutSuccessComponent } from './shop/components/checkout-success/checkout-success.component';
import { OrderListComponent } from './shop/components/order-list/order-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListProductComponent } from './seller/components/list-product/list-product.component';
import { EditProductComponent } from './seller/components/edit-product/edit-product.component';
import { DeleteProductComponent } from './seller/components/delete-product/delete-product.component';
import { AddProductComponent } from './seller/components/add-product/add-product.component';
import { SellerCoreComponent } from './seller/components/seller-core/seller-core.component';
import { SellerHeaderComponent } from './seller/components/seller-header/seller-header.component';
import { SellerFooterComponent } from './seller/components/seller-footer/seller-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ProductDetailComponent,
    ProductListComponent,
    AdminCoreComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminProductListComponent,
    AdminSidebarComponent,
    AdminProductCreateComponent,
    RegisterComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CheckoutSuccessComponent,
    OrderListComponent,
    SellerCoreComponent,
    SellerFooterComponent,
    SellerHeaderComponent,
    ListProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OrderService,
    AuthService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
