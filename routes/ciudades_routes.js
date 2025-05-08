import express from "express";
import ciudadesController from "../controller/CiudadesController.js";
import { validarCiudad } from "../middleware/validarCiudad.js";



const router = express.Router();

router.get('/', ciudadesController.getAllCiudades);

router.post('/',validarCiudad, ciudadesController.createCiudad);

router.put('/:id',validarCiudad,ciudadesController.actualizarCiudad)

router.patch('/:id',ciudadesController.actualizarParcialCiudad);

router.delete('/:id',ciudadesController.eliminarCiudad);


export default router;