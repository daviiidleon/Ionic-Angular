import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard, IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {FooterComponent} from "../footer/footer.component";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wish-list.service';
import { Product } from '../services/products.service';
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
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabeceraComponent, FooterComponent, IonIcon, IonButton, IonCard, IonImg, IonCardHeader, IonCardTitle]
})
export class WishlistPage implements OnInit {
  wishlist: Product[] = [];
  loading: boolean = true;


  user: any = null;
  private id: any[] | undefined;


  constructor(
    private wishlistService: WishlistService,
    private authService: AuthService,
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
      this.wishlist = await this.wishlistService.getWishlist();
      this.loading = false;
    });
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

  startShopping() {
    this.router.navigate(['/product-list']);
  }

  goToProduct(_id: string) {
    this.router.navigate(['/product', this.id]);
  }
}

