import { Especie } from './EspecieEnum';

export class Mascota {
    id: string;
    nombre: string;
    raza: string;
    edad: number;
    especie: Especie;
    fechaIngreso: Date;
    estado: string;

    constructor(id: string, nombre: string, raza: string, edad: number, especie: Especie) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.especie = especie;
    }

}
