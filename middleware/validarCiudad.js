export const validarCiudad = (req,res,next) => {
    const {ciudad } = req.body;
    
    if (!ciudad || ciudad.trim()=="") {
      return res.status(400).json({ mensaje: "El nombre de la ciudad es obligatorio" });   
    }
    next();
  }