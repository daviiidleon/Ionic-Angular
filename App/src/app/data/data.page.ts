import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {FooterComponent} from "../footer/footer.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, CabeceraComponent, FooterComponent, IonIcon]
})
export class DataPage implements OnInit {
  user: any = null;

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuthUserObservable().subscribe(user => {
      this.user = user;
      this.cd.detectChanges();
    });
  }

  goToMyData() {
    this.router.navigate(['/data']); // ✅ Redirección a la página 'data'
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
