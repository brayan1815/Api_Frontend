import Ciudades from "../models/ciudades.js";


class ciudadesController{
    static getAllCiudades = async(req,res)=>{
        const OBJCiudad=new Ciudades();
        const ciudades=await OBJCiudad.getAll();
        res.json(ciudades);
    }

    static createCiudad=async(req,res)=>{
        try {
            const {ciudad}=req.body;
            const OBJCiudad=new Ciudades();
            const ciu=await OBJCiudad.create(ciudad)
            res.status(201).json(ciu);
        } catch (error) {
            res.status(500).json({error:error.mensaje})
        }
    }

    static actualizarCiudad=async(req,res)=>{
        const {id}=req.params;
        const{ciudad}=req.body;
        try {
            const OBJCiudad=new Ciudades();
            const ciu=await OBJCiudad.update(id,ciudad);
            res.status(201).json(ciu);
        } catch (error) {
            res.status(500).json({error:error}.mensaje)
        }
    }

    static actualizarParcialCiudad=async(req,res)=>{
        const campos=req.body;
        const {id}=req.params;
        try {
            const OBJCiudad = new Ciudades();
            const ciu=await OBJCiudad.updateParcial(id,campos);
            res.json(ciu);
        } catch (error) {
            res.status(500).json({error:error}.message);
        }
    }

    static eliminarCiudad=async(req,res)=>{
        const {id}=req.params;
        try {
            const OBJCiudad=new Ciudades();
            const ciu=await OBJCiudad.deleteCiudad(id);
            res.json(ciu);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default ciudadesController;