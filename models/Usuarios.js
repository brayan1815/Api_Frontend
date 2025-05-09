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


    async validarUsuarioExistente(documento){
        const [rows]=await connection.query("SELECT * FROM usuarios WHERE documento=?",[documento]);
        return rows.length>0;
    }

    async create(documento, nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad){
        try {
            if( await this.validarUsuarioExistente(documento)){
                throw new Error("Ya existe un usuario registrado con este documento");
            }
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
            throw new Error(error);
        }
    }

    async update(documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad,id){
        try {
            const [result]=await connection.query("UPDATE usuarios SET documento=?,nombre_usuario=?,apellido_usuario=?,telefono=?,contrasenia=?,genero=?,ciudad=? WHERE id=?",[documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad,id])
            if (result.affectedRows===0) {
                throw new Error("Usuario no encontrada")
            }
            return {id:id,
                documento:documento,
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

    async updateParcial(id,campos){
            try {
                for(const key in campos){
                    const[result]=await connection.query(`UPDATE usuarios SET ${key}=? WHERE id=?`,[campos[key],id])
                }
                const [mostrar]=await connection.query("SELECT * FROM usuarios WHERE id=?",[id]);
                console.log(mostrar);
                return mostrar;
            } catch (error) {
                
            }
    }

    

    async deleteUsuario(id){
        try {
            // if(await this.validarGenerosAsociados(id)){
            //     throw new Error("No se puede eliminar el genero porque tiene usuarios asociados");
            // }
            const [result]=await connection.query("DELETE FROM usuarios WHERE id=?",[id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    
    
}

export default Usuarios;