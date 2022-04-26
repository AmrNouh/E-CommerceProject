import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedFile:File = null;
  imgPath = '../../../assets/ProductImages/';
  product: Product;
    constructor(private myService:ProductsService , private http:HttpClient) { }
    
    onFileChanged(event) {
    
      const file = event.target.files[0].name ;
      this.product.imageUrl = this.imgPath + file;
      console.log(file);
    }
    

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