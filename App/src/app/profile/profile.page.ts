import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, FooterComponent, IonicModule] // Asegúrate de que IonicModule esté en los imports
})
export class ProfilePage implements OnInit {
  user: any = null;

  constructor(private authService: AuthService,
              private cd: ChangeDetectorRef) {
    addIcons({ logOutOutline, cartOutline, personCircleOutline ,cartSharp, shirtSharp ,logInSharp,homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {
    this.authService.getAuthUserObservable().subscribe(user => {
      this.user = user;
      this.cd.detectChanges(); // Forzar la detección de cambios
    });
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
