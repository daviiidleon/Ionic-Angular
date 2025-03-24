import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class LoginPage implements OnInit {

  token= 'vvg7576g';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('token', this.token)
    this.router.navigate(['/home']);
  }

}
