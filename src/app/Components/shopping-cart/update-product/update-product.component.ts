import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
//import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: number;
  product: Product;
  selectedFile:File = null;
  imgPath = '../../../assets/ProductImages/';
  constructor(private myService: ProductsService, private route: ActivatedRoute ,private http:HttpClient) {
    this.productId = this.route.snapshot.params["id"];
  }

  onFileChanged(event) {
    
    const file = event.target.files[0].name ;
    this.product.imageUrl = this.imgPath + file;
    console.log(file);
  }
  
  ngOnInit(): void {
    this.myService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data[0]
      }
    )
  }

  OnClick() {
    this.myService.updateProduct(this.productId, this.product).subscribe(
      () => console.log("Updated successfully"),
      (error) => console.log(error)
    )
      console.log(this.imgPath)
  }



}
