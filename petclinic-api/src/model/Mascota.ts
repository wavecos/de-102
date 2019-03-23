import { Especie } from "./EspecieEnum";

export class Mascota {
    public nombre: string;
    public raza: string;
    public edad: number;
    public especie: Especie;
    public fechaIngreso: Date;
    public estado: string;

    constructor(nombre: string, raza: string, edad: number, especie: Especie) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.especie = especie;
    }

}
