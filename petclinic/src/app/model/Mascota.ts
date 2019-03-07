import { Especie } from './EspecieEnum';

export class Mascota {
    nombre: string;
    raza: string;
    edad: number;
    especie: Especie;
    fechaIngreso: Date;
    estado: string;

    constructor(nombre: string, raza: string, edad: number, especie: Especie) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.especie = especie;
    }

}
