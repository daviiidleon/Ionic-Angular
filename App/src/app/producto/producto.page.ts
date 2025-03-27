import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../services/products.service';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonSpinner,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  IonButton
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCol,
    IonRow,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner,
    IonButton
  ]
})
export class ProductoPage implements OnInit {

  productId: string | null = null;
  product: Product | null = null;
  isLoading: boolean = true;

  quantity: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProductDetail(this.productId);
    }
  }

  loadProductDetail(id: string) {
    this.isLoading = true;
    this.productsService.getProductById(id).then(product => {
      this.product = product;
      this.isLoading = false;
    }).catch(error => {
      console.error('Error al cargar el producto:', error);
      this.isLoading = false;
    });
  }

  addToCart() {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  removeFromCart() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
