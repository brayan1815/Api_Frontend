import connection from "../utils/db.js";

class Lenguajes{
    async getAll(){
        try {
            const [rows]=await connection.query("SELECT * FROM lenguajes");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener los lenguajes");
        }
    }

    async create(nombre_lenguaje){
        try {
            const [result]=await connection.query("INSERT INTO lenguajes(nombre_lenguaje) VALUES (?)",[nombre_lenguaje]);
            return{
                id:result.id,
                nombre:nombre_lenguaje
            }
        } catch (error) {
            throw new error("error al crear el lenguaje")
        }
    }

    async update(id,nombre_lenguaje){
        try {
            const [result]=await connection.query("UPDATE lenguajes SET nombre_lenguaje=? WHERE id_lenguaje=?",[nombre_lenguaje,id]);
            if(result.affectedRows===0){
                throw new Error("Lenguaje no encontrada");
            }
            return{
                id:id,
                nombre:nombre_lenguaje
            }
        } catch (error) {
            
        }
    }

    async updateParcial(id,campos){
        try {
            for(const key in campos){
                const[result]=await connection.query(`UPDATE lenguajes SET ${key}=? WHERE id_lenguaje=?`,[campos[key],id])
            }
            const [mostrar]=await connection.query("SELECT * FROM lenguajes WHERE id_lenguaje=?",[id]);
            console.log(mostrar);
            return mostrar;
        } catch (error) {
            
        }
    }

    async validarLenguaje (id_lenguaje) {
        const [rows] = await connection.query("SELECT * FROM lenguaje_usuario WHERE id_lenguaje  = ?",[id_lenguaje]);
        return rows.length>0;
       }

    async deleteLenguaje(id){
        try {
            if(await this.validarLenguaje (id)){
                throw new Error("no se puede eliminar el lenguaje porque tiene usuarios asociados");
            }
            const [result]=await connection.query("DELETE FROM lenguajes WHERE id_lenguaje=?",[id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Lenguajes;