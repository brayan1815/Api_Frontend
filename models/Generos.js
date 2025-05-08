import connection from "../utils/db.js";

class Generos{

    async getAll(){
        try {
            const [rows]=await connection.query("SELECT * FROM generos");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener los generos");
        }
    }

    async create(genero){
        try {
            const [result]=await connection.query("INSERT INTO generos(genero) VALUES (?)",[genero]);
            return{
                id:result.id,
                genero:genero
            }
        } catch (error) {
            throw new error("error al crear el genero")
        }
    }

    async update(id,genero){
        try {
            const [result]=await connection.query("UPDATE generos SET genero=? WHERE id_genero=?",[genero,id]);
            if(result.affectedRows===0){
                throw new Error("Genero no encontrada");
            }
            return{
                id:id,
                genero:genero
            }
        } catch (error) {
            
        }
    }

    async updateParcial(id,campos){
        try {
            for(const key in campos){
                const[result]=await connection.query(`UPDATE generos SET ${key}=? WHERE id_genero=?`,[campos[key],id])
            }
            const [mostrar]=await connection.query("SELECT * FROM generos WHERE id_genero=?",[id]);
            console.log(mostrar);
            return mostrar;
        } catch (error) {
            
        }
    }

    async validarGenerosAsociados(genero_id){
        const [rows]=await connection.query("SELECT * FROM usuarios WHERE genero=?",[genero_id]);
        return rows.length>0;
    }

    async deleteGenero(id){
        try {
            if(await this.validarGenerosAsociados(id)){
                throw new Error("No se puede eliminar el genero porque tiene usuarios asociados");
            }
            const [result]=await connection.query("DELETE FROM generos WHERE id_genero=?",[id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Generos;