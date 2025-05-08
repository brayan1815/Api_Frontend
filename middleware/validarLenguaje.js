export const validarLenguaje = (req,res,next) => {
    const {nombre_lenguaje } = req.body;
    
    if (!nombre_lenguaje || nombre_lenguaje.trim()=="") {
      return res.status(400).json({ mensaje: "El nombre del lenguaje es obligatorio" });   
    }
    next();
  }