import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/MusicService';

@Component({
  selector: 'app-canciones-list',
  templateUrl: './canciones-list.component.html',
  styleUrls: ['./canciones-list.component.css']
})
export class CancionesListComponent implements OnInit {

  constructor(private musicServive: MusicService) { }

  ngOnInit() {

    this.musicServive.obtenerCanciones()
      .subscribe((resp) => {
        console.log(resp);
      });

  }

}
