import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/Services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: {
    id: number, name: string, price: number, rating: number, image
    : string, dicount: number, category
    : string, color: string, size: string, quantity: number
  }

  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }

}
