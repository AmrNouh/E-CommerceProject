import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BaseURL = 'http://localhost:3000/products'
  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get(this.BaseURL);
  }

  getProductById(id: number) {
    return this.httpClient.get(`this.BaseURL/${id}`);
  }

  getProductByCategoryName(categoryName: string) {
    return this.httpClient.get(`this.BaseURL?category=${categoryName}`);
  }

  createNewProduct(product: {
    id: number, name: string, price: number, rating: number, images
    : string[], dicount: number, category
    : string, color: string, size: string, quantity: number
  }) {
    return this.httpClient.post(this.BaseURL, product);
  }

  updateProudct(id: number, product: {
    id: number, name: string, price: number, rating: number, images
    : string[], dicount: number, category
    : string, color: string, size: string, quantity: number
  }) {
    return this.httpClient.put(`this.BaseURL/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`this.BaseURL/${id}`);
  }
}
