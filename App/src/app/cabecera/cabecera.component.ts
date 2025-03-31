import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonMenuButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [CommonModule, IonMenuButton],
})
export class CabeceraComponent {}
