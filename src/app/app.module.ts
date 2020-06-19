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
import { FormsModule } from '@angular/forms';
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
import { AdminOrderListComponent } from './admin/components/order/admin-order-list/admin-order-list.component';
import { AdminProductUpdateComponent } from './admin/components/product/admin-product-update/admin-product-update.component';
import { AdminProductReviewsComponent } from './admin/components/product/admin-product-reviews/admin-product-reviews.component';
import { ConfirmationDialogComponent } from './admin/components/product/admin-product-list/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './admin/components/product/admin-product-list/confirmation-dialog/confirmation-dialog.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminGuard, LoginGuard } from './guards/role.guard';

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
    AdminOrderListComponent,
    AdminProductUpdateComponent,
    AdminProductReviewsComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    OrderService,
    AuthService,
    ProductService,
    NgbModule,
    ConfirmationDialogService,
    AdminGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
