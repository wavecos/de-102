import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MascotaListComponent } from './mascota/mascota-list/mascota-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MascotaNewComponent } from './mascota/mascota-new/mascota-new.component';
import { EnumKeyValueListPipe } from './utils/enumlist.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DueniosListComponent } from './duenios/duenios-list/duenios-list.component';
import { CancionesListComponent } from './canciones/canciones-list/canciones-list.component';
import { MascotaEditComponent } from './mascota/mascota-edit/mascota-edit.component';
import { MascotaFormComponent } from './mascota/mascota-form/mascota-form.component';
import { EdadValidatorDirective } from './edad-validator.directive';

@NgModule({
  declarations: [
    EnumKeyValueListPipe,
    AppComponent,
    MascotaListComponent,
    MascotaNewComponent,
    HeaderComponent,
    FooterComponent,
    DueniosListComponent,
    CancionesListComponent,
    MascotaEditComponent,
    MascotaFormComponent,
    EdadValidatorDirective
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
