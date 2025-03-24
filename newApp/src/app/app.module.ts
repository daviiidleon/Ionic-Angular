import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@NgModule({
  providers: [
    BarcodeScanner
  ]
})
export class AppModule { }
