import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonMenuButton
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  cartSharp, shirtSharp, logInSharp, homeSharp, heartSharp, personSharp
} from "ionicons/icons";
import { FormsModule } from "@angular/forms";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonMenuButton,
    IonHeader,
    IonButton,
    IonButtons,
    IonInput,
    FormsModule,
    IonIcon,
    IonContent
  ],
})
export class CabeceraComponent implements OnInit {
  showLoginForm = false;
  user: any = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {
    addIcons({ cartSharp, shirtSharp, logInSharp, homeSharp, heartSharp, personSharp });
  }

  ngOnInit() {
    this.authService.getAuthUserObservable().subscribe(user => {
      this.user = user;
      this.cd.detectChanges(); // Forzar la detección de cambios
    });
  }

  showForm() {
    this.showLoginForm = true;
  }

  hideForm() {
    this.showLoginForm = false;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToLogin(showRegister: boolean = false) {
    this.router.navigate(['/login'], {
      queryParams: { register: showRegister ? 'true' : 'false' }
    });
  }

  goToWishlist() {
    this.router.navigate(['/wishlist']);
  }

  goToPay() {
    this.router.navigate(['/pay']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = null;
      this.router.navigate(['/']); // ✅ Redirige al home tras cerrar sesión
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}





/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonMenuButton
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  cartSharp, shirtSharp, logInSharp, homeSharp, heartSharp, personSharp
} from "ionicons/icons";
import { FormsModule } from "@angular/forms";
import { AuthService } from '../services/auth.service'; // Asegúrate que el path sea correcto

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [CommonModule, IonMenuButton, IonHeader, IonButton, IonButtons, IonInput, FormsModule, IonIcon, IonContent],
})
export class CabeceraComponent implements OnInit {
  showLoginForm = false;
  user: any = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    addIcons({ cartSharp, shirtSharp, logInSharp, homeSharp, heartSharp, personSharp });
  }

  ngOnInit() {
    this.checkUser();
  }

  async checkUser() {
    const user = this.authService.getCurrentUser();
    this.user = user;
    // Si quieres usar onAuthStateChanged:
    // onAuthStateChanged(this.authService.getAuth(), (user) => this.user = user);
  }

  showForm() {
    this.showLoginForm = true;
  }

  hideForm() {
    this.showLoginForm = false;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToLogin(showRegister: boolean = false) {
    this.router.navigate(['/login'], { queryParams: { register: showRegister ? 'true' : 'false' } });
  }

  goToWishlist() {
    this.router.navigate(['/wishlist']);
  }

  goToPay() {
    this.router.navigate(['/pay']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = null;
    });
  }
}
*/


/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonMenuButton
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  cartSharp, shirtSharp, logInSharp, homeSharp, heartSharp, personSharp
} from "ionicons/icons";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [CommonModule, IonMenuButton, IonHeader, IonButton, IonButtons, IonInput, FormsModule, IonIcon, IonContent],
})
export class CabeceraComponent {
  showLoginForm = false;

  constructor(private router: Router) {
    addIcons({ cartSharp, shirtSharp, logInSharp, homeSharp, heartSharp, personSharp });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  // Método para mostrar el formulario al pasar el ratón
  showForm() {
    this.showLoginForm = true;
  }

  // Método para ocultarlo cuando se retira el cursor
  hideForm() {
    this.showLoginForm = false;
  }

  // Redirige a Login con opción para mostrar registro
  goToLogin(showRegister: boolean = false) {
    this.router.navigate(['/login'], { queryParams: { register: showRegister ? 'true' : 'false' } });
  }

  // Redirige a la página de Wishlist
  goToWishlist() {
    this.router.navigate(['/wishlist']);  // Asegúrate de tener la ruta 'wishlist' configurada en tu archivo de rutas
  }

  goToPay() {
    this.router.navigate(['/pay']);
  }
}
*/
