import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
import {AuthService} from "../services/auth.service";
import {addIcons} from "ionicons";
import {
  archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp,
  cartOutline,
  cartSharp, heartOutline, heartSharp,
  homeSharp,
  logInSharp,
  logOutOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
  personCircleOutline,
  shirtSharp, trashOutline, trashSharp, warningOutline, warningSharp
} from "ionicons/icons";


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
  user: any = null;


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

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    addIcons({
      logOutOutline, cartOutline, personCircleOutline, cartSharp, shirtSharp,
      logInSharp, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
      heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp,
      warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
    });
  }

  ngOnInit() {
    this.authService.getAuthUserObservable().subscribe(async user => {
      this.user = user;
    });
  }

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

  goToMyData() {
    this.router.navigate(['/data']);
  }

  goToMyPurchases() {
    this.router.navigate(['/pay']);
  }

  goToMyFavorites() {
    this.router.navigate(['/wishlist']);
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = null;
      this.router.navigate(['/home']);
    });
  }
}
