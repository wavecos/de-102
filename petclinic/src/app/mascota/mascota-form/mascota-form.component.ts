import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/model/EspecieEnum';
import { Mascota } from 'src/app/model/Mascota';
import { MascotaService } from 'src/app/services/MascotaService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Respuesta } from 'src/app/model/Respuesta';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {

  especies = Especie;

  mascota: Mascota = {
    id: null,
    nombre: "",
    raza: "",
    edad: 0,
    especie: Especie.PERRO,
    fechaIngreso: new Date(),
    estado: "nuevo"
  }

  isEdit: boolean;
  mascotaId: string;

  constructor(private mascotaService: MascotaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap( (params: ParamMap) => {
        this.isEdit = params.get("isEdit") === "true" ? true : false;

          if ( this.isEdit ) {
            this.mascotaId = params.get("mascotaId");
            return this.mascotaService.getMascota(this.mascotaId);
          } else {
            return of(this.mascota);
          }
      }))
      .subscribe((mascota: Mascota) => {
        console.log(mascota.nombre);
        this.mascota = mascota;
      });
  }

  actualizar() {
    this.mascotaService.actualizarMascota(this.mascotaId, this.mascota)
      .subscribe((respuesta: Respuesta) => {
        this.router.navigate(['/mascotas']);
      });
  }


}
