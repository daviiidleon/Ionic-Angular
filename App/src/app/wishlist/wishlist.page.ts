/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { FooterComponent } from "../footer/footer.component";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import {IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg} from "@ionic/angular/standalone";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, CabeceraComponent, FooterComponent, IonIcon, IonButton, IonIcon, IonButton, IonImg, IonCard, IonContent, IonHeader]
})
export class WishlistPage implements OnInit {
  user: any = null;
  wishlist: any[] = [];  // Lista de productos en la wishlist

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.authService.getAuthUserObservable().subscribe(async user => {
      this.user = user;
      if (user) {
        this.loadWishlist(user.uid);  // Cargar la wishlist del usuario cuando se ha autenticado
      }
    });
  }

  loadWishlist(uid: string) {
    this.firebaseService.getUserData(uid).then(userData => {
      //CUIDADO
      if (userData && userData['wishlist']) {
        this.wishlist = userData['wishlist'];  // Asignar los productos de la wishlist al arreglo
      }
    }).catch(error => {
      console.error('Error al cargar la wishlist:', error);
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
}
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {FooterComponent} from "../footer/footer.component";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabeceraComponent, FooterComponent, IonIcon, IonButton]
})
export class WishlistPage implements OnInit {
  user: any = null;


  constructor(
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
}

