import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink, IonGrid, IonRow, IonCol]
})
export class HomePage implements OnInit {

  code: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {

  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data: ', this.code);
    }).catch(err => {
      console.log('Error, err');
    });
  }

}
