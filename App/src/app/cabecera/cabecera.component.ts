import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonMenuButton
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp,
  cartSharp, heartOutline, heartSharp,
  homeSharp, logInSharp, mailOutline, mailSharp,
  paperPlaneOutline, paperPlaneSharp, shirtSharp,
  trashOutline, trashSharp, warningOutline, warningSharp,
  personSharp
} from "ionicons/icons";
import { FormsModule } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [CommonModule, IonMenuButton, IonHeader, IonButton, IonButtons, IonInput, FormsModule, IonIcon, IonContent],
})
export class CabeceraComponent {

  email: string = '';
  password: string = '';
  registerName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerPasswordConfirm: string = '';
  forgotEmail: string = '';

  token = 'vvg7576g';

  showLoginForm = false;
  showRegisterForm = false;
  showForgotPasswordForm = false;

  constructor(private router: Router) {
    addIcons({
      cartSharp, shirtSharp, logInSharp, homeSharp,
      mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
      heartOutline, heartSharp, archiveOutline, archiveSharp,
      trashOutline, trashSharp, warningOutline, warningSharp,
      bookmarkOutline, bookmarkSharp, personSharp
    });

  }

  goToHome() {
    this.router.navigate(['/']); // Redirige a la página principal (home)
  }

  ngOnInit() {}

  showAnyForm() {
    return this.showLoginForm || this.showRegisterForm || this.showForgotPasswordForm;
  }

  toggleForm() {
    if (this.showAnyForm()) {
      this.closeAllForms();
    } else {
      this.showLoginForm = true;
    }
  }

  openRegister(event: Event) {
    event.preventDefault();
    this.closeAllForms();
    this.showRegisterForm = true;
  }

  openLogin(event: Event) {
    event.preventDefault();
    this.closeAllForms();
    this.showLoginForm = true;
  }

  openForgotPassword(event: Event) {
    event.preventDefault();
    this.closeAllForms();
    this.showForgotPasswordForm = true;
  }

  closeAllForms() {
    this.showLoginForm = false;
    this.showRegisterForm = false;
    this.showForgotPasswordForm = false;
  }

  login() {
    if (this.email && this.password) {
      localStorage.setItem('token', this.token);
      alert('Inicio de sesión exitoso');
      this.closeAllForms();
    } else {
      alert('Por favor, ingresa ambos campos');
    }
  }

  showForm() {
    this.showLoginForm = true;
  }

  hideForm() {
    this.showLoginForm = false;
  }
}
