import { NgModule } from '@angular/core';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@NgModule({
  providers: [
    BarcodeScanner
  ]
})
export class AppModule { }
