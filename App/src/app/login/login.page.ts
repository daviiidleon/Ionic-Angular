import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import {ActivatedRoute} from "@angular/router";
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonInput, IonButton, CommonModule, FormsModule, CabeceraComponent, FooterComponent]
})
export class LoginPage implements OnInit {
  segmentValue: string = 'login';
  showRegisterForm = false;

  login = {
    email: '',
    password: ''
  };

  register = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Leer el parámetro 'register' de la URL
    this.route.queryParams.subscribe(params => {
      if (params['register'] === 'true') {
       this.segmentValue = 'register';
      }
    });
  }

  loginUser() {
    console.log('Iniciar sesión con:', this.login);
  }

  registerUser() {
    if (this.register.password !== this.register.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    console.log('Registrar con:', this.register);
  }
}
