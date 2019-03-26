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

  mensajeError: string;
  mostrarMensajeError: boolean = false;

  constructor(private mascotaService: MascotaService, private router: Router) { }

  ngOnInit() {
  }

  guardar() {
    console.log('nombre ' + this.mascota.nombre);
    this.mascotaService.adicionarMascota(this.mascota)
    .subscribe((respuesta) => {
      if (respuesta.codigoError != null) {
        this.mostrarMensajeError = true;
        this.mensajeError = respuesta.mensaje;
      } else {
        this.router.navigate(['/mascotas']);
      }
    });


    // this.mascota = {
    //   nombre: "",
    //   raza: "",
    //   edad: 0,
    //   especie: Especie.PERRO,
    //   fechaIngreso: new Date(),
    //   estado: "nuevo"
    // }

    
  }

}
