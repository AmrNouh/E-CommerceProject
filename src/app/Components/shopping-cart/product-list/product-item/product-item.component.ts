import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/Services/messenger.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(private msg: MessengerService, private myService: ProductsService ,private router :Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
    
 }
 
  DeleteProduct(id:number)
  {
   
     let DeleteProduct=confirm("are you sure you want to delete this product ?")
     if(DeleteProduct)
     {
       this.myService.deleteProduct(id).subscribe();
       this.redirectTo('home');
     }

  }

     
}
