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
}
