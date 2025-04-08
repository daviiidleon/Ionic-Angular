import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { FooterComponent } from "../footer/footer.component";
import {
  logOutOutline,
  personCircleOutline,
  cartOutline,
  search,
  cartSharp,
  shirtSharp,
  logInSharp,
  homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';
import {addIcons} from "ionicons";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, FooterComponent, IonicModule] // Asegúrate de que IonicModule esté en los imports
})
export class ProfilePage implements OnInit {

  user = {
    displayName: 'Juan Pérez', // Cambia esto por el nombre real del usuario o lo que estés utilizando
    email: 'juanperez@example.com'  // Cambia esto por el correo real del usuario
  };

  constructor() {
    addIcons({ logOutOutline, cartOutline, personCircleOutline ,cartSharp, shirtSharp ,logInSharp,homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {
  }

  goToMyData() {
    console.log('Navegando a Mis Datos');
    // Aquí puedes agregar la lógica para navegar a la página de 'Mis Datos'
  }

  goToMyPurchases() {
    console.log('Navegando a Mis Compras');
    // Aquí puedes agregar la lógica para navegar a la página de 'Mis Compras'
  }

  goToMyFavorites() {
    console.log('Navegando a Mis Favoritos');
    // Aquí puedes agregar la lógica para navegar a la página de 'Mis Favoritos'
  }

  logout() {
    console.log('Cerrando sesión');
    // Aquí puedes agregar la lógica para cerrar la sesión
  }
}
