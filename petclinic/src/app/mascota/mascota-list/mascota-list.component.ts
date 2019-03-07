import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../model/Mascota';
import { MascotaService } from '../../services/MascotaService';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  mascotas: Mascota[];

  constructor(private mascotaService: MascotaService) {
    this.mascotas = mascotaService.getMascotas()
  }

  ngOnInit() {
  }

}
