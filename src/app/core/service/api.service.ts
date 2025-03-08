import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../model/product.model';
import { single } from 'rxjs';
import ProductComponent from '../../pages/product/product.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'https://fakestoreapi.com';
  http = inject(HttpClient);
  cartProductCount = signal(0);
  getProductByCategory(category: string, limitCount?: number) {
    const queryParams = limitCount ? `?limit= ${limitCount}` : '';
    return this.http.get<Product[]>(
      `${this.API}/products/category/${category}${queryParams}`
    );
  }
  getProducts = () => this.http.get<Product[]>(`${this.API}/products`);
  getProduct = (id: number) =>
    this.http.get<Product>(`${this.API}/products/${id}`);

  addNewProduct(product: Product) {
    return this.http.post<Product>(`${this.API}/products`, product);
  }
  editProduct(product: Product) {
    return this.http.put<Product>(
      `${this.API}/products/${product.id}`,
      product
    );
  }
  updateProductTitle(id: string, title: string) {
    return this.http.patch<Product>(`${this.API}/products/${id}`, title);
  }
  deleteProduct(id: string) {
    return this.http.delete<void>(`${this.API}/products/${id}`);
  }
}
