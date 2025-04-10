import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IonContent, IonIcon} from "@ionic/angular/standalone";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    IonContent,
    IonIcon
  ]
})
export class SideMenuComponent  implements OnInit {
  user: any = null;


  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {}

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
