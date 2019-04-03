import { Request, Response } from "express";

export let allPets = (req: Request, res: Response) => {
    res.send("Todas las mascotas");
};

export let getPet = (req: Request, res: Response) => {
    res.send("Devuelve una mascota");
};

export let deletePet = (req: Request, res: Response) => {
    res.send("Borrar una mascota");
};

export let addPet = (req: Request, res: Response) => {
    res.send("Adicionar una mascota");
};

export let updatePet = (req: Request, res: Response) => {
    res.send("Actualizar una mascota");
};

