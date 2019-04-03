import express from "express";
import * as bodyParser from "body-parser";
import * as petController from "./controllers/petController"

const app = express();
const port = 8080; // puerto por defecto

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
    res.send( "Bienvenido al API de PetClinic 1.0");
} );

// API para Pets
app.get("/pet", petController.allPets);
app.get("/pet/:id", petController.getPet);
app.post("/pet", petController.addPet);
app.put("/pet/:id", petController.updatePet);
app.delete("/pet/:id", petController.deletePet);

// Inicializamos el server de Express
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
