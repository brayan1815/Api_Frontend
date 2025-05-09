import express from "express";
import UsuariosController from "../controller/UsuariosController.js";
import { validarUsuario } from "../middleware/validarUsuario.js";

const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);

router.post('/',validarUsuario, UsuariosController.createUsuario);

router.put('/:id',validarUsuario,UsuariosController.actualizarUsuario)

router.patch('/:id',UsuariosController.actualizarParcialUsuario);

router.delete('/:id',UsuariosController.eliminarUsuario);


export default router;