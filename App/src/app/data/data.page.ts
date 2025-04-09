import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonContent, IonHeader, IonIcon
} from '@ionic/angular/standalone';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  logOutOutline, personCircleOutline, cartOutline,
  heartOutline, cartSharp, shirtSharp, logInSharp, homeSharp,
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
  heartSharp, archiveOutline, archiveSharp, trashOutline,
  trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';

import { doc, getDoc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, CabeceraComponent, FooterComponent, IonIcon, IonButton]
})
export class DataPage implements OnInit {
  user: any = null;

  formData: any = {
    email: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    zipCode: '',
    fechaNacimiento: '',
    genero: ''
  };

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    addIcons({
      logOutOutline, cartOutline, personCircleOutline, cartSharp, shirtSharp,
      logInSharp, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
      heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp,
      warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
    });
  }

  async ngOnInit() {
    this.authService.getAuthUserObservable().subscribe(async user => {
      this.user = user;
      if (user) {
        const uid = user.uid;
        const docRef = doc(this.authService['db'], 'users', uid);
        const docSnap = await getDoc(docRef);
        const extraData = docSnap.exists() ? docSnap.data() : {};

        this.formData = {
          email: user.email || '',
          nombre: extraData?.['name'] || '',
          apellidos: extraData?.['apellidos'] || '',
          telefono: extraData?.['telefono'] || '',
          zipCode: extraData?.['zipCode'] || '',
          fechaNacimiento: extraData?.['fechaNacimiento'] || '',
          genero: extraData?.['genero'] || ''
        };
      }
      this.cd.detectChanges();
    });
  }

  async guardarDatos() {
    if (this.user?.uid) {
      const userRef = doc(this.authService['db'], 'users', this.user.uid);
      await setDoc(userRef, {
        name: this.formData.nombre,
        apellidos: this.formData.apellidos,
        telefono: this.formData.telefono,
        zipCode: this.formData.zipCode,
        fechaNacimiento: this.formData.fechaNacimiento,
        genero: this.formData.genero
      }, { merge: true });
      alert('Datos guardados correctamente');
    }
  }

  goToMyData() {
    this.router.navigate(['/data']);
  }

  goToMyPurchases() {
    this.router.navigate(['/pay']);
  }

  goToMyFavorites() {
    this.router.navigate(['/wishlist']);
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = null;
      this.router.navigate(['/home']);
    });
  }
}

