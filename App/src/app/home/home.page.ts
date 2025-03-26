import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButtons } from '@ionic/angular/standalone';
import {
  search,
  cartSharp,
  shirtSharp,
  logInSharp,
  homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';
import {addIcons} from "ionicons";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonButtons, IonInput]
})
export class HomePage implements OnInit {

  email: string = '';
  password: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  token = 'vvg7576g';

  // Controla si se muestra el formulario de inicio de sesión o de registro
  showLoginForm = false;
  showRegisterForm = false;

  constructor() {
    addIcons({ cartSharp, shirtSharp ,logInSharp,homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });

  }

  ngOnInit() {}

  // Alternar entre los formularios de login y registro
  toggleForm() {
    if (this.showLoginForm || this.showRegisterForm) {
      this.showLoginForm = false;
      this.showRegisterForm = false;
    } else {
      this.showLoginForm = true; // Muestra el formulario de login
    }
  }

  // Función de inicio de sesión
  login() {
    if (this.email && this.password) {
      localStorage.setItem('token', this.token);
      alert('Inicio de sesión exitoso');
      this.showLoginForm = false; // Cierra el formulario de login
    } else {
      alert('Por favor, ingresa ambos campos');
    }
  }

  // Función de registro
  register() {
    if (this.registerEmail && this.registerPassword) {
      alert('Registro exitoso');
      this.showRegisterForm = false; // Cierra el formulario de registro
    } else {
      alert('Por favor, ingresa ambos campos');
    }
  }
}
