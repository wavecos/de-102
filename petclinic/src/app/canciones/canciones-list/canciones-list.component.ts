import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/MusicService';
import { Cancion } from 'src/app/model/Cancion';

@Component({
  selector: 'app-canciones-list',
  templateUrl: './canciones-list.component.html',
  styleUrls: ['./canciones-list.component.css']
})
export class CancionesListComponent implements OnInit {

  canciones: Cancion[] = []; 

  constructor(private musicServive: MusicService) { }

  ngOnInit() {

    this.musicServive.obtenerCanciones()
      .subscribe((respuesta) => {
        console.log(respuesta);
        this.canciones = respuesta;
      });

  }

}
