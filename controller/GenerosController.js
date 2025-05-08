import Generos from "../models/Generos.js"

class GenerosController {
    
    static getAllGeneros =async (req,res)=>{
       const OBJGeneros=new Generos(); 
       const generos=await OBJGeneros.getAll();
       res.json(generos);
    }

    static createGenero=async (req,res)=>{
        try {
            const {genero}=req.body;
            const OBJGeneros=new Generos();
            const gen=await OBJGeneros.create(genero);
            res.status(201).json(gen);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    static actualizarGenero=async(req,res)=>{
        const {id}=req.params;
        const{genero}=req.body;
        try {
            const OBJGeneros=new Generos();
            const gen=await OBJGeneros.update(id,genero);
            res.status(201).json(gen);
        } catch (error) {
            res.status(500).json({error:error}.mensaje)
        }
    }

    static actualizarParcialGenero=async(req,res)=>{
        const campos=req.body;
        const {id}=req.params;
        try {
            const OBJGeneros = new Generos();
            const gen=await OBJGeneros.updateParcial(id,campos);
            res.json(gen);
        } catch (error) {
            res.status(500).json({error:error}.message);
        }
    }

    static eliminarGenero=async(req,res)=>{
        const {id}=req.params;
        try {
            const OBJGeneros=new Generos();
            const gen=await OBJGeneros.deleteGenero(id);
            res.json(gen);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default GenerosController;