import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCard, IonCol, IonContent, IonHeader, IonRow, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from "@angular/common/http";
import { map} from "rxjs/operators";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonRow, IonCard, RouterLink, HttpClientModule]
})
export class CitiesPage implements OnInit {

  token = localStorage.getItem("token");
  cities: any = [];
  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    console.log("token: ", this.token);
    //localStorage.removeItem("token");
    localStorage.clear();
    this.getCities().subscribe(res => {
      console.log("Res", res);
      this.cities = res;
    });
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
