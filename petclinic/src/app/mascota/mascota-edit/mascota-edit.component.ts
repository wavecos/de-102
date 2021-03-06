import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/model/EspecieEnum';
import { MascotaService } from 'src/app/services/MascotaService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mascota } from 'src/app/model/Mascota';
import { switchMap, map } from 'rxjs/operators';
import { Respuesta } from 'src/app/model/Respuesta';

@Component({
  selector: 'app-mascota-edit',
  templateUrl: './mascota-edit.component.html',
  styleUrls: ['./mascota-edit.component.css']
})
export class MascotaEditComponent implements OnInit {

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

  mascotaId: string;

  constructor(private mascotaService: MascotaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap( (params: ParamMap) => {
        this.mascotaId = params.get("mascotaId");
        return this.mascotaService.getMascota(this.mascotaId);
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
