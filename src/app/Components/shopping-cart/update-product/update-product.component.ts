import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
//import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private myService:ProductsService) { }
    
    
  ngOnInit( ): void {
    this.myService. getProductById(3).subscribe(
      (data)=>{
        this.p=data[0]
      }
      )
  }

  p:Product=new  Product();

    OnClick(){
    this.myService.updateProudct(3,this.p).subscribe(
      ()=>console.log("Updated sucessfully"),
      (error)=>console.log(error)
    )
     
  }
  


}
