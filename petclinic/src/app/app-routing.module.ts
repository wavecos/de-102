import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotaListComponent } from './mascota/mascota-list/mascota-list.component';
import { MascotaNewComponent } from './mascota/mascota-new/mascota-new.component';
import { DueniosListComponent } from './duenios/duenios-list/duenios-list.component';
import { CancionesListComponent } from './canciones/canciones-list/canciones-list.component';

const routes: Routes = [
  { path: "mascotas", component: MascotaListComponent },
  { path: "nueva-mascota", component: MascotaNewComponent },
  { path: "duenios", component: DueniosListComponent},
  { path: "canciones", component: CancionesListComponent },
  { path: "", redirectTo: "/mascotas", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
