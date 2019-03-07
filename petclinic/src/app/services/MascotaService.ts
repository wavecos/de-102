import { Mascota } from '../model/Mascota';
import { Especie } from '../model/EspecieEnum';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MascotaService {

    getMascotas(): Mascota[] {
        var m1 = new Mascota("Hitler", "pastor aleman", 56, Especie.PERRO);
        var m2 = new Mascota("Firulais", "dobberman", 32, Especie.PERRO);
        var m3 = new Mascota("Tom", "siames", 17, Especie.GATO);

        return new Array(m1, m2, m3);
    }

}