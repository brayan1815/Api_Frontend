import express from "express";
import GenerosController from "../controller/GenerosController.js";
import { validarGenero } from "../middleware/validarGenero.js";



const router = express.Router();

router.get('/', GenerosController.getAllGeneros);

router.post('/',validarGenero, GenerosController.createGenero);

router.put('/:id',validarGenero,GenerosController.actualizarGenero)

router.patch('/:id',GenerosController.actualizarParcialGenero);

router.delete('/:id',GenerosController.eliminarGenero);


export default router;