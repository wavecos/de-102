import express from "express";
const app = express();
const port = 8080; // puerto por defecto

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

// Inicializamos el server de Express
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
