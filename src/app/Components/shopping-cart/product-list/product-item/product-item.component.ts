import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { MessengerService } from 'src/app/Services/messenger.service';
import { ProductsService } from 'src/app/Services/products.service';
=======
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service';
>>>>>>> 6c13ecb6d8090926511db903643f75790066b8a0

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(private msg: MessengerService, private myService: ProductsService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }

  showProductDetails(id: number) {
    this.myService.getProductById(id).subscribe(
      (product) => {
        console.log(product);
      }
    )
  }

}
