import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/models/product'
import { Observable } from 'rxjs';
const  BaseURL = 'http://localhost:3000/products'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    
    return this.http.get<Product[]>(BaseURL);
  }

  getAllProducts() {
    return this.http.get(BaseURL);
  }

  getProductById(id: number) {
    return this.http.get(`this.BaseURL/${id}`);
  }

  getProductsByCategoryName(categoryName: string) {
    return this.http.get(`this.BaseURL?category=${categoryName}`);
  }

  createNewProduct(product: {
    id: number, name: string, price: number, rating: number, image
    : string, dicount: number, category
    : string, color: string, size: string, quantity: number
  }) {
    return this.http.post(BaseURL, product);
  }

  updateProudct(id: number, product: {
    id: number, name: string, price: number, rating: number, image
    : string, dicount: number, category
    : string, color: string, size: string, quantity: number
  }) {
    return this.http.put(`this.BaseURL/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`this.BaseURL/${id}`);
  }
}
