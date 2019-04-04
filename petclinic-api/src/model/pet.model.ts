import mongoose from "mongoose";

const uri: string = "mongodb://localhost:27017/local";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log('Hubo un error en la conexion');
    } else {
        console.log('Se hizo la conexion con MongoDB');
    }
});

export const PetSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    edad: { type: Number, required: true },
    especie: { type: String, required: true },
    fechaIngreso: { type: Date, required: false },
    estado: { type: String, required: true }
});

const Pet = mongoose.model('Pet', PetSchema);

export default Pet;
