import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/models/product'
import { Observable } from 'rxjs';
const BaseURL = 'http://localhost:3000/products'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(BaseURL);
  }

  getAllProducts() {
    return this.http.get(BaseURL);
  }

  getProductById(id: number) {
    return this.http.get(`${BaseURL}?id=${id}`);
    return this.http.get(`${BaseURL}/${id}`);
  }

  getProductsByCategoryName(categoryName: string) {
    return this.http.get(`this.BaseURL?category=${categoryName}`);
  }

  createNewProduct(product: Product) {
    return this.http.post(BaseURL,product);
  }

<<<<<<< HEAD
  updateProudct(id: number, product: Product) {
    return this.http.put(`${BaseURL}/${id}`,product);
=======
  updateProudct(id: number, product: {
    id: number, name: string, price: number, rating: number, image
    : string, dicount: number, category
    : string, color: string, size: string, quantity: number
  }) {
    return this.http.put(`${BaseURL}/${id}`, product);
>>>>>>> 43099db21164321083ba55fa9983f36380907e5c
  }

  deleteProduct(id: number) {
    return this.http.delete(`${BaseURL}/${id}`);
  }
}
