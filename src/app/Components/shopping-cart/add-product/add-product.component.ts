import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  

    constructor(private myService:ProductsService) { }
    
    
    ngOnInit(): void {
    }
  
    AddNew(name:string,price: string| number,imageUrl:string,rating:string| number,discount: string|number,category:string,color:string,quantity:string|number,size:string){
      let product=new Product();
    product.name = name;
    product.price =+ price;
    product.imageUrl = imageUrl;
    product.rating = +rating;
    product.discount =+ discount;
   product.category = category;
    product.color = color;
    product.quantity =+ quantity;
    product.size=size;
      this.myService.createNewProduct(product).subscribe(
        (data) =>{
          console.log(data);
          
        }
      );
    }

  
 
  
}