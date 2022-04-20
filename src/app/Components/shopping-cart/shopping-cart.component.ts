import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
// import { ProductsService } from 'src/app/services/products.service';
//import { ProductsService } from 'src/app/services/products.service';
//import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    // private myService:ProductsService
    ) { }

  ngOnInit() {
  }
//   updateData(value: any) {
//     let body = {
//       name: value.name,
//       age: value.age
//     }

//   //   this.ProductsService.updateData(body, `622ca8c59f6c668226f74f52`)
//   //     .subscribe(response => {
//   //       console.log(response)
//    //
//   // //}

// }
}
