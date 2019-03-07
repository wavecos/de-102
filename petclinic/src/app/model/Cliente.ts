import { Mascota } from './Mascota';

class Cliente {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    celular: string;
    genero: string;
    nit: string;
    direccion: string;
    rating: number;
    mascota: Mascota;

    nombreCompleto(): string {
        return this.nombre + " " + this.apellido;
    }

    esVip(): boolean {
        return this.rating > 3;
    }

}