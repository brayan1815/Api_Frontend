import express from "express";
import LenguajesController from "../controller/LenguajesController.js";
import { validarLenguaje } from "../middleware/validarLenguaje.js";



const router = express.Router();

router.get('/', LenguajesController.getAllLenguajes);

router.post('/',validarLenguaje, LenguajesController.createLenguaje);

router.put('/:id',validarLenguaje,LenguajesController.actualizarLenguaje)

router.patch('/:id',LenguajesController.actualizarParcialLenguaje);

router.delete('/:id',LenguajesController.eliminarLenguaje);


export default router;