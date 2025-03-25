import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}

type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: Product[];
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {}

  // Obtener todos los productos
  getAll(): Promise<ApiResponse> {
    return firstValueFrom(this.httpClient.get<ApiResponse>('https://peticiones.online/api/products'));
  }

  // Obtener un producto por ID
  getProductById(id: string): Promise<Product> {
    return firstValueFrom(this.httpClient.get<Product>(`https://peticiones.online/api/products/${id}`));
  }
}
