import { Mascota } from '../model/Mascota';
import { Especie } from '../model/EspecieEnum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
        return this.http.get("http://localhost:8080/mascota/list")
            .pipe(map(jsonData => {
                var mascotas: Mascota[] = [];

                var mascotasJson = jsonData as Array<any>;

                mascotasJson.forEach(mascotaJson => {
                    var mascota = new Mascota(
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

    adicionarMascota(mascota: Mascota) {
        // this.mascotas.push(mascota);
    }

}