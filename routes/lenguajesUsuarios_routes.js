import express from "express";
import LenguajesUsuariosController from "../controller/LenguajesUsuariosController.js";
import { validarLenguajeUsuario } from "../middleware/validarLenguajeUsuario.js";

const router = express.Router();

router.get('/', LenguajesUsuariosController.getAllLenguajesUsuarios);

router.post('/',validarLenguajeUsuario, LenguajesUsuariosController.createLenguajeUsuario);

router.put('/:id',validarLenguajeUsuario,LenguajesUsuariosController.actualizarLenguajeUsuarios)

router.patch('/:id',LenguajesUsuariosController.actualizarParcialLenguajesUsuarios);

router.delete('/:id',LenguajesUsuariosController.eliminarLenguajeUsuario);


export default router;