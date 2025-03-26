import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent
} from '@ionic/angular/standalone';
import { Product, ProductsService } from '../services/products.service';
import { search } from 'ionicons/icons';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonListHeader, IonThumbnail, IonSearchbar, IonRefresher, IonRefresherContent, RouterLink]
})
export class ProductListPage implements OnInit {

  products: Product[] = [];
  searchedProducts: Product[] = [];

  productService = inject(ProductsService);

  async ngOnInit() {
    // Inicializa los productos cuando la página se carga
    await this.loadProducts();
  }

  // Método para cargar productos desde el servicio
  async loadProducts() {
    const response = await this.productService.getAll();
    this.products = response.results;
    this.searchedProducts = [...this.products];  // Inicializa con todos los productos
  }

  // Método para buscar productos
  searchCustomer(event: any) {
    const text = event.target.value;  // Obtenemos el valor del input

    if (!text || text.trim() === '') {
      this.searchedProducts = [...this.products];  // Si no hay texto, mostramos todos los productos
    } else {
      this.searchedProducts = this.products.filter((product: Product) => {
        return (product.name.toLowerCase().indexOf(text.toLowerCase()) > -1);  // Filtra por nombre del producto
      });
    }
  }

  // Método para refrescar los productos (doRefresh)
  async doRefresh(event: any) {
    console.log('Inicio de la operación de refresco');

    // Llamada al servicio para recargar los productos
    await this.loadProducts();

    // Termina la operación de refresco
    setTimeout(() => {
      console.log('La operación de refresco ha finalizado');
      event.target.complete(); // Esto termina el refresco visual
    }, 2000); // Simula un retraso de 2 segundos
  }
}
