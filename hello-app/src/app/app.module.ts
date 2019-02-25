import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConvertirMonedaComponent } from './convertir-moneda/convertir-moneda.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertirMonedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
