import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButtons } from '@ionic/angular/standalone';

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
  registerName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerPasswordConfirm: string = '';
  forgotEmail: string = '';

  token = 'vvg7576g';

  showLoginForm = false;
  showRegisterForm = false;
  showForgotPasswordForm = false;

  constructor() {}

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

  register() {
    if (this.registerName && this.registerEmail && this.registerPassword && this.registerPasswordConfirm) {
      if (this.registerPassword !== this.registerPasswordConfirm) {
        alert('Las contraseñas no coinciden');
        return;
      }
      alert('Registro exitoso');
      this.closeAllForms();
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  recoverPassword() {
    if (this.forgotEmail) {
      alert(`Se ha enviado un correo de recuperación a: ${this.forgotEmail}`);
      this.closeAllForms();
    } else {
      alert('Por favor, ingresa tu correo');
    }
  }
}
