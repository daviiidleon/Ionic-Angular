import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCard, IonCol, IonContent, IonHeader, IonRow, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import { HttpClient} from "@angular/common/http";
import { map} from "rxjs/operators";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonRow, IonCard, RouterLink]
})
export class CitiesPage implements OnInit {

  cities: any = [];
  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
  }

  getCities() {
    return this.http
      .get("assets/files/cities.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }
  //min 7:14

}
