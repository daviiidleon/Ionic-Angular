import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonHeader, IonMenuButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [CommonModule, IonMenuButton, IonHeader],
})
export class CabeceraComponent {}
