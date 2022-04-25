import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { AddProductComponent } from './Components/shopping-cart/add-product/add-product.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { UpdateProductComponent } from './Components/shopping-cart/update-product/update-product.component';


const routes: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: ShoppingCartComponent },
  { path: "Details/:id", component: ItemDetailsComponent },
  { path: "Update/:id", component: UpdateProductComponent },
  { path: "New", component: AddProductComponent },
  { path: "**", component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
