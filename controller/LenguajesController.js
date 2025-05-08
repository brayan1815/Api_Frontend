import Lenguajes from "../models/Lenguajes.js"

class LenguajesController{
    static getAllLenguajes =async (req,res)=>{
        const OBJLenguajes=new Lenguajes(); 
        const lenguajes=await OBJLenguajes.getAll();
        res.json(lenguajes);
     }

     static createLenguaje=async (req,res)=>{
        try {
            const {nombre_lenguaje}=req.body;
            const OBJLenguajes=new Lenguajes();
            const len=await OBJLenguajes.create(nombre_lenguaje);
            res.status(201).json(len);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    static actualizarLenguaje=async(req,res)=>{
        const {id}=req.params;
        const{nombre_lenguaje}=req.body;
        try {
            const OBJLenguajes=new Lenguajes();
            const len=await OBJLenguajes.update(id,nombre_lenguaje);
            res.status(201).json(len);
        } catch (error) {
            res.status(500).json({error:error}.mensaje)
        }
    }

    static actualizarParcialLenguaje=async(req,res)=>{
        const campos=req.body;
        const {id}=req.params;
        try {
            const OBJLenguajes = new Lenguajes();
            const len=await OBJLenguajes.updateParcial(id,campos);
            res.json(len    );
        } catch (error) {
            res.status(500).json({error:error}.message);
        }
    }

    static eliminarLenguaje=async(req,res)=>{
        const {id}=req.params;
        try {
            const OBJLenguajes=new Lenguajes();
            const len=await OBJLenguajes.deleteLenguaje(id);
            res.json(len);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default LenguajesController;