import LenguajesUsuarios from "../models/LenguajesUsuarios.js"

class LenguajesUsuariosController{
    static getAllLenguajesUsuarios =async (req,res)=>{
        const OBJLenguajesUsuarios=new LenguajesUsuarios(); 
        const lenUsu=await OBJLenguajesUsuarios.getAll();
        res.json(lenUsu);
    }

    static createLenguajeUsuario=async (req,res)=>{
        try {
            const {id_usuario,id_lenguaje}=req.body;
            const OBJLenguajesUsuarios=new LenguajesUsuarios();
            const lenUsu=await OBJLenguajesUsuarios.create(id_usuario,id_lenguaje);
            res.status(201).json(lenUsu);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    static actualizarLenguajeUsuarios= async (req, res) => {
        const { id } = req.params;
        const { id_usuario,id_lenguaje } = req.body;
        try {
          const OBJLenguajeUsuarios = new LenguajesUsuarios();
          const lenguajeUsuarios = await OBJLenguajeUsuarios.update(id_usuario,id_lenguaje,id);
          res.json(lenguajeUsuarios);
        } catch (error) {
          res.status(500).json({ error: error.message })
        }
    }

    static actualizarParcialLenguajesUsuarios=async(req,res)=>{
        const campos=req.body;
        const {id}=req.params;
        try {
            const OBJLenguajeUsuarios = new LenguajesUsuarios();
            const lenUsu=await OBJLenguajeUsuarios.updateParcial(id,campos);
            res.json(lenUsu);
        } catch (error) {
            res.status(500).json({error:error}.message);
        }
    }

    static eliminarLenguajeUsuario=async(req,res)=>{
        const {id}=req.params;
        try {
            const OBJLenguajeUsuarios = new LenguajesUsuarios();
            const lenUsu=await OBJLenguajeUsuarios.deleteLenguajeUsuario(id);
            res.json(lenUsu);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default LenguajesUsuariosController;