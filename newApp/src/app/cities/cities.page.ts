import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router, RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule


import {IonCard, IonCol, IonContent, IonHeader, IonRow, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {map} from "rxjs/operators";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRow, IonCol, IonCard, HttpClientModule, RouterLink]
})
export class CitiesPage implements OnInit {

  cities: any = []// no da error

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log("hola");
    this.getCities().subscribe(res => {
      console.log("Res", res);
      this.cities = res;
    });
  }


  getCities() {
    return this.http
      .get("assets/files/cities.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: 'Se ha borrao la ciudad correctamente',
      buttons: ['OK'],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Borrar Ciudad",
      message: "¿Estas seguro?",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("No cancel")
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log("Ciudad Eliminada")
          }
        }
      ]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
