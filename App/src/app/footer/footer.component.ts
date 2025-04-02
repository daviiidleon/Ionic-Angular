import { Component, OnInit } from '@angular/core';
import {IonIcon} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {
  archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp,
  cartSharp, heartOutline, heartSharp,
  homeSharp,
  logInSharp, logoFacebook, logoInstagram, logoTwitter, logoYoutube,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp, personSharp,
  shirtSharp, trashOutline, trashSharp, warningOutline, warningSharp
} from "ionicons/icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonIcon
  ]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({
      logoYoutube, logoTwitter, logoFacebook, logoInstagram
    });
  }

  ngOnInit() {}

}
