import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productList = this.productService.getAllProducts().subscribe(
      (data) => {
        this.productList = data;
        console.log(data);

      },
      (err) => {

      }
    );
  }

}
