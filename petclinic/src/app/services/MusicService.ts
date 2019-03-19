import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cancion } from '../model/Cancion';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    constructor(private http: HttpClient) {}

    obtenerCanciones(): Observable<Cancion[]> {
        return this.http.get("https://itunes.apple.com/search?term=beatles&entity=song&limit=10")
                .pipe(map(jsonData => {
                    var cancionesJson = jsonData['results'];
                    var canciones: Cancion[] = [];

                    cancionesJson.forEach(cancionJson => {
                        var cancion = new Cancion();
                        cancion.artista = cancionJson['artistName'];
                        cancion.album = cancionJson['collectionName'];
                        cancion.cancion = cancionJson['trackName'];
                        cancion.fecha = cancionJson['releaseDate'];
                        cancion.precio = cancionJson['trackPrice'];
                        cancion.moneda = cancionJson['currency'];
                        cancion.genero = cancionJson['primaryGenreName'];
                        cancion.albumImagen = cancionJson['artworkUrl100'];
                        cancion.vistaPrevia = cancionJson['previewUrl'];

                        canciones.push(cancion);
                    });
                    
                    return canciones;
                }));
    }

}