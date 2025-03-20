import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList, IonListHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router, RouterLink } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    RouterLink,
    IonItem,
    IonList,
    IonLabel,
    IonAvatar,
    IonListHeader,
    IonIcon,
    HttpClientModule  // Añade HttpClientModule aquí
  ]
})
export class CustomersPage implements OnInit {

  users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    console.log("hola");
    this.getUsers().subscribe(res => {
      console.log("Res", res);
      this.users = res;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  getUsers() {
    return this.http
      .get("assets/files/customers.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }

}
