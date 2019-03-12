import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MascotaListComponent } from './mascota/mascota-list/mascota-list.component';
import { FormsModule } from '@angular/forms';
import { MascotaNewComponent } from './mascota/mascota-new/mascota-new.component';
import { EnumKeyValueListPipe } from './utils/enumlist.pipe';

@NgModule({
  declarations: [
    EnumKeyValueListPipe,
    AppComponent,
    MascotaListComponent,
    MascotaNewComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
