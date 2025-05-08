import express from "express";
import UsuariosController from "../controller/UsuariosController.js";
import { validarUsuario } from "../middleware/validarUsuario.js";

const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);

router.post('/',validarUsuario, UsuariosController.createUsuario);

router.put('/:documento',validarUsuario,UsuariosController.actualizarUsuario)

// router.patch('/:id',ciudadesController.actualizarParcialCiudad);

// router.delete('/:id',ProductoController.eliminarProducto);


export default router;