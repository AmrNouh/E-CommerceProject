import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './Components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './Components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './Components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './Components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './Components/shopping-cart/product-list/product-item/product-item.component';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './Components/shopping-cart/add-product/add-product.component';
import { UpdateProductComponent } from './Components/shopping-cart/update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './Components/shared/nav/nav.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { SliderComponent } from './Components/shared/slider/slider.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { AboutComponent } from './Components/shared/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    AddProductComponent,
    UpdateProductComponent,
    SliderComponent,
    ItemDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
