import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/model/EspecieEnum';
import { MascotaService } from 'src/app/services/MascotaService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mascota } from 'src/app/model/Mascota';
import { switchMap } from 'rxjs/operators';

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

  constructor(private mascotaService: MascotaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        let mascotaId = params.get("mascotaId");
        console.log(mascotaId);
        return this.mascotaService.getMascota(mascotaId);
      }))
      .subscribe((mascota: Mascota) => {
        this.mascota = mascota
      });
  }

}
