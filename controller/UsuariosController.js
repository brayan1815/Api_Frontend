import Usuarios from "../models/Usuarios.js";


class UsuariosController{
    
    static getAllUsuarios =async (req,res)=>{
        const OBJUsuario=new Usuarios(); 
        const usuarios=await OBJUsuario.getAll();
        res.json(usuarios);
     }
    
    static createUsuario=async(req,res)=>{
        try {

            const {documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad}=req.body;
            const OBJUsuario=new Usuarios();
            const usu=await OBJUsuario.create(documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad);
            res.status(201).json(usu);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    static actualizarUsuario=async(req,res)=>{
        const {id}=req.params; 
        const {documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad}=req.body;
        try {
            const OBJUsuario=new Usuarios();
            const user=await OBJUsuario.update(documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad,id);
            res.json(user);
        } catch (error) {
            res.status(500).json({error:error}.message);
        }
    }

    static actualizarParcialUsuario=async(req,res)=>{
        const campos=req.body;
        const {id}=req.params;
        try {
            const OBJUsuario = new Usuarios();
            const usu=await OBJUsuario.updateParcial(id,campos);
            res.json(usu);
        } catch (error) {
            res.status(500).json({error:error}.message);
        }
    }

    static eliminarUsuario=async(req,res)=>{
        const {id}=req.params;
        try {
            const OBJUsuario=new Usuarios();
            const usu=await OBJUsuario.deleteUsuario(id);
            res.json(usu);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
    
}

export default UsuariosController;