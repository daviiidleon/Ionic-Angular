import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonButton,
  IonInput,
  IonImg
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  shirtSharp, logInSharp, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
  heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline,
  warningSharp, bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';
import { CabeceraComponent } from './cabecera/cabecera.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonButton,
    IonInput,
    IonImg,
    CabeceraComponent // 👈 Aquí importamos la cabecera
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Productos', url: '/product-list', icon: 'shirt' }
  ];

  constructor() {
    addIcons({
      shirtSharp, logInSharp, homeSharp, mailOutline, mailSharp, paperPlaneOutline,
      paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline,
      trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
    });
  }
}
