import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  productId: number;
  product: any;
  constructor(private activeRoute: ActivatedRoute, private myService: ProductsService) {
    this.productId = this.activeRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data;
      }
    )
  }

}
