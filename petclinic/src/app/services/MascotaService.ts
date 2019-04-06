import { Mascota } from '../model/Mascota';
import { Especie } from '../model/EspecieEnum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Respuesta } from '../model/Respuesta';

@Injectable({
    providedIn: 'root'
})
export class MascotaService {

    constructor(private http: HttpClient) {}

    // mascotas: Mascota[] = [
    //     new Mascota("Hitler", "pastor aleman", 56, Especie.PERRO),
    //     new Mascota("Firulais", "dobberman", 32, Especie.PERRO),
    //     new Mascota("Tom", "siames", 17, Especie.GATO)
    // ]

    getMascotas(): Observable<Mascota[]> {
        return this.http.get("http://localhost:8080/pet")
            .pipe(map(jsonData => {
                var mascotas: Mascota[] = [];

                var mascotasJson = jsonData as Array<any>;

                mascotasJson.forEach(mascotaJson => {
                    var mascota = new Mascota(
                        mascotaJson['_id'],
                        mascotaJson['nombre'],
                        mascotaJson['raza'],
                        mascotaJson['edad'],
                        mascotaJson['especie']
                    );

                    mascotas.push(mascota);
                });

                return mascotas;
            }));
    }

    getMascota(id: string): Observable<Mascota> {
        return this.http.get("http://localhost:8080/pet/" + id)
        .pipe(map(mascotaJson => {
            var mascota = new Mascota(
                mascotaJson['_id'],
                mascotaJson['nombre'],
                mascotaJson['raza'],
                mascotaJson['edad'],
                mascotaJson['especie']
            );
            return mascota;
        }));
    }

    adicionarMascota(mascota: Mascota): Observable<Respuesta> {
        // this.mascotas.push(mascota);
        return this.http.post("http://localhost:8080/pet", mascota)
            .pipe(map(jsonData => {
                const respuesta = new Respuesta();
                respuesta.codigoError = jsonData["codigoError"];
                respuesta.mensaje = jsonData["mensaje"];

                return respuesta;
            }));

    }

    eliminarMascota(id: string): Observable<Respuesta> {
        return this.http.delete("http://localhost:8080/pet/" + id)
            .pipe(map(jsonData => {
                const respuesta = new Respuesta();
                respuesta.codigoError = jsonData["codigoError"];
                respuesta.mensaje = jsonData["mensaje"];

                return respuesta;
            }));
    }

}