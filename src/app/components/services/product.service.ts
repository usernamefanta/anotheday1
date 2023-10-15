/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
*/
// /src/app/services/product.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Example product data
  private products = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'Description for Product 3' },
    // Add more products as needed
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}

