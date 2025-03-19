import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem, IonLabel, IonList,
  IonMenu, IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, RouterLink, IonList, IonMenuToggle],
})
export class AppComponent {
  constructor() {}
}
