import connection from "../utils/db.js";

class Usuarios{

    async getAll(){
        try {
            const [rows]=await connection.query("SELECT * FROM usuarios");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener los usuarios");
        }
    }

    async create(documento, nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad){
        try {
            const [result]=await connection.query("INSERT INTO usuarios(documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad) VALUES (?,?,?,?,?,?,?)",[documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad]);
            return{
                documento:documento,
                nombre:nombre_usuario,
                apellido:apellido_usuario,
                telefono:telefono,
                contrasenia:contrasenia,
                genero:genero,
                ciudad:ciudad
            }
        } catch (error) {
            throw new Error("error al crear el usuario")
        }
    }

    async update(nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad,documento){
        try {
            const [result]=await connection.query("UPDATE usuarios SET nombre_usuario=?,apellido_usuario=?,telefono=?,contrasenia=?,genero=?,ciudad=? WHERE documento=?",[nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad,documento])
            if (result.affectedRows===0) {
                throw new Error("Usuario no encontrada")
            }
            return {documento:documento,
                nombre:nombre_usuario,
                apellido:apellido_usuario,
                telefono:telefono,
                contrasenia:contrasenia,
                genero:genero,
                ciudad:ciudad
              }
        } catch (error) {
            
        }
    }
    
}

export default Usuarios;