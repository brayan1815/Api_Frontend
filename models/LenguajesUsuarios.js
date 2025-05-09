import connection from "../utils/db.js";

class LenguajesUsuarios{

    async getAll(){
        try {
            const [rows]=await connection.query("SELECT * FROM lenguaje_usuario");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener los lenguajes de los usuario");
        }
    }

    async validarRegistroExistente(id_usuario,id_lenguaje){
        const [rows]=await connection.query("SELECT * FROM lenguaje_usuario WHERE id_lenguaje=? AND id_usuario=?;",[id_lenguaje,id_usuario]);
        return rows.length>0;
    }

    async create(id_usuario,id_lenguaje){
        try {
            if(await this.validarRegistroExistente(id_usuario,id_lenguaje)){
                throw new Error("Estos datos ya se encuentran registrados");
            }
            const [result]=await connection.query("INSERT INTO lenguaje_usuario(id_usuario,id_lenguaje) VALUES (?,?)",[id_usuario,id_lenguaje]);
            return{
                id_usuario:id_usuario,
                id_lenguaje:id_lenguaje
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(id_usuario,id_lenguaje,id) {
        try {
          const [result] = await connection.query("UPDATE lenguaje_usuario SET id_usuario = ?, id_lenguaje = ? WHERE id = ?", [id_usuario,id_lenguaje,id]);
          if (result.affectedRows === 0) {
            throw new Error("Usuario no encontrada");
          }
          return { id_usuario,id_lenguaje,id }
        } catch (error) {
          throw new Error("Error al actualizar el usuario");
        }   
    }

    async updateParcial(id,campos){
        try {
            for(const key in campos){
                const[result]=await connection.query(`UPDATE lenguaje_usuario SET ${key}=? WHERE id=?`,[campos[key],id])
            }
            const [mostrar]=await connection.query("SELECT * FROM lenguaje_usuario WHERE id=?",[id]);
            console.log(mostrar);
            return mostrar;
        } catch (error) {
            
        }
    }

    async deleteLenguajeUsuario(id){
        try {
            // if(await this.validarGenerosAsociados(id)){
            //     throw new Error("No se puede eliminar el genero porque tiene usuarios asociados");
            // }
            const [result]=await connection.query("DELETE FROM lenguaje_usuario WHERE id=?",[id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default LenguajesUsuarios;