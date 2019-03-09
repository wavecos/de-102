import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascota-new',
  templateUrl: './mascota-new.component.html',
  styleUrls: ['./mascota-new.component.css']
})
export class MascotaNewComponent implements OnInit {

  mascota = {
    nombre: "",
    raza: "pastor aleman",
    edad: 0,
    especie: ""
  }


  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log('nombre ' + this.mascota.nombre);
  }

}
