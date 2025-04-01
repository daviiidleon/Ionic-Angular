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
  IonButton, IonIcon
} from "@ionic/angular/standalone";
import {CabeceraComponent} from "../cabecera/cabecera.component";

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
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner,
    IonButton,
    CabeceraComponent,
    IonIcon
  ]
})
export class ProductoPage implements OnInit {

  productId: string | null = null;
  product: Product | null = null;
  isLoading: boolean = true;
  selectedSize: string | null = null; // Variable para almacenar la talla seleccionada

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

  // Método para seleccionar una talla
  selectSize(size: string) {
    this.selectedSize = size;
  }
}
