import { Mascota } from '../model/Mascota';
import { Especie } from '../model/EspecieEnum';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MascotaService {

    mascotas: Mascota[] = [
        new Mascota("Hitler", "pastor aleman", 56, Especie.PERRO),
        new Mascota("Firulais", "dobberman", 32, Especie.PERRO),
        new Mascota("Tom", "siames", 17, Especie.GATO)
    ]

    getMascotas(): Mascota[] {
        return this.mascotas;
    }

    adicionarMascota(mascota: Mascota) {
        this.mascotas.push(mascota);
    }

}