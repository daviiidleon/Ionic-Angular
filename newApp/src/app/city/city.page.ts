import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCard, IonCol, IonContent, IonHeader, IonRow, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule


@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule, IonCard, IonCol, IonRow, RouterLink]
})
export class CityPage implements OnInit {

  id: any;
  // @ts-ignore
  finalId: number;
  cities: any = []// no da error
  // @ts-ignore
  name: string;
  // @ts-ignore
  image: string;
  // @ts-ignore
  desc: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;
    console.log("id", this.id);

    this.getCities().subscribe(res => {
      console.log("Res", res);
      this.cities = res;
      this.name = this.cities[this.finalId].name;
      this.image = this.cities[this.finalId].image;
      this.desc = this.cities[this.finalId].desc;
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

}
