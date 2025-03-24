import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader, IonRefresher, IonRefresherContent,
  IonSearchbar,
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
    HttpClientModule,
    IonSearchbar,
    IonRefresher,
    IonRefresherContent,
    // Añade HttpClientModule aquí
  ]
})
export class CustomersPage implements OnInit {

  users: any = [];
  searchedUser: any = [];

  permission: boolean | undefined;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.permission = true;
    console.log("hola");
    this.getUsers().subscribe(res => {
      console.log("Res", res);
      this.users = res;
      this.searchedUser = [...this.users];
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

  searchCustomer(event: any) {
    const text = event.target.value;  // Obtenemos el valor del input

    if (!text || text.trim() === '') {
      this.searchedUser = [...this.users];  // Si no hay texto, mostramos todos los usuarios
    } else {
      this.searchedUser = this.users.filter((user: any) => {
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) >-1);  // Filtro por nombre
      });
    }
  }

  doRefresh(event: any) {
    this.getUsers();
    console.log('Begin async operation')

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }




}
