import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail
} from "@ionic/angular/standalone";
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {FooterComponent} from "../footer/footer.component";
import {CurrencyPipe} from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    CabeceraComponent,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon,
    FooterComponent,
    CurrencyPipe
  ]
})
export class PayPage implements OnInit {

  cartItems = [
    {
      name: 'Camiseta básica',
      description: 'Color negro, talla M',
      price: 19.99,
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Pantalón vaquero',
      description: 'Slim fit, talla 32',
      price: 39.99,
      image: 'https://via.placeholder.com/100'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  removeItem(itemToRemove: any): void {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
  }

  checkout(): void {
    // Aquí podrías navegar a una página de pago o hacer una petición
    alert('Procesando el pago...');
  }

  verGuardados() {
    this.router.navigate(['/wishlist']);
  }

  seguirComprando() {
    this.router.navigate(['/product-list']);
  }
}
