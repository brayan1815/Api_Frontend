export const validarLenguajeUsuario = (req,res,next) => {
    const {id_usuario,id_lenguaje } = req.body;
    
    if (!id_usuario || id_usuario.trim()=="") {
      return res.status(400).json({ mensaje: "El ID del usuario es obligatorio" });   
    }
    if (!id_lenguaje || id_lenguaje.trim()=="") {
        return res.status(400).json({ mensaje: "El ID del lenguaje es obligatorio" });   
      }
    next();
  }