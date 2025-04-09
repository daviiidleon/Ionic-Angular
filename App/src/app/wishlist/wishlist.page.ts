import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {FooterComponent} from "../footer/footer.component";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit() {
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
