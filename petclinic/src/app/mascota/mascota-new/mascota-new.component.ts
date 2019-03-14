import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/Mascota';
import { Especie } from 'src/app/model/EspecieEnum';
import { MascotaService } from 'src/app/services/MascotaService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota-new',
  templateUrl: './mascota-new.component.html',
  styleUrls: ['./mascota-new.component.css']
})
export class MascotaNewComponent implements OnInit {

  especies = Especie

  mascota: Mascota = {
    nombre: "",
    raza: "",
    edad: 0,
    especie: Especie.PERRO,
    fechaIngreso: new Date(),
    estado: "nuevo"
  }

  constructor(private mascotaService: MascotaService, private router: Router) { }

  ngOnInit() {
  }

  guardar() {
    console.log('nombre ' + this.mascota.nombre);
    this.mascotaService.adicionarMascota(this.mascota);
    this.mascota = {
      nombre: "",
      raza: "",
      edad: 0,
      especie: Especie.PERRO,
      fechaIngreso: new Date(),
      estado: "nuevo"
    }

    this.router.navigate(['/mascotas']);
  }

}
