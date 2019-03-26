import express from "express";
import * as bodyParser from "body-parser";
import { Especie } from "./model/EspecieEnum";
import { Mascota } from "./model/Mascota";

const app = express();
const port = 8080; // puerto por defecto

const mascotas: Mascota[] = [
    new Mascota("Hitler", "pastor aleman", 56, Especie.PERRO),
    new Mascota("Firulais", "dobberman", 32, Especie.PERRO),
    new Mascota("Tom", "siames", 17, Especie.GATO)
];

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Usamos la libreria body-parser para poder usar json en el body de los POST
app.use(bodyParser.json());

// definir la ruta principal para nuestra web page
app.get( "/", ( req, res ) => {
    res.send( "Hola Mundo NodeJS-Express !!" );
} );

app.get( "/cognos", ( req, res ) => {
    res.send( "<h1>COGNOS CAPACITACION</h1>" );
} );

app.get( "/cognos2", ( req, res ) => {
    res.type("json");
    res.send( "<h1>COGNOS CAPACITACION</h1>" );
} );

app.get("/mascota/list", (req, res) => {
    res.type("json");
    // res.send({
    //     resultados: mascotas,
    //     total: mascotas.length
    // });
    res.send(mascotas);
});

app.post("/mascota/nuevo", (req, res) => {
    // console.log(req.body);
    // console.log(req.headers);
    // console.log(req.ip);

    const mascotaJson = req.body;
    const mascota = new Mascota(
        mascotaJson["nombre"],
        mascotaJson["raza"],
        mascotaJson["edad"],
        mascotaJson["especie"]
    );

    mascotas.push(mascota);

    res.send({
        "codigoError": 400,
        "mensaje": "se ha producido un error"
    });
});

// Inicializamos el server de Express
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
