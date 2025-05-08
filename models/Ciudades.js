import connection from "../utils/db.js";

class Ciudades{
    async getAll(){
        try {
            const [rows]=await connection.query("SELECT * FROM ciudades");
            return rows;
        } catch (error) {
            throw new Error ("Error al obtener las ciudades");
        }
    }

    async create(ciudad){
        try {
            const [result]=await connection.query("INSERT INTO ciudades(ciudad) VALUES (?)",[ciudad]);
            return{
                id:result.id,
                ciudad:ciudad
            }
        } catch (error) {
            throw new error("error al crear la ciudad")
        }
    }

    async update(id,ciudad){
        try {
            const [result]=await connection.query("UPDATE ciudades SET ciudad=? WHERE id_ciudad=?",[ciudad,id]);
            if(result.affectedRows===0){
                throw new Error("Categoria no encontrada");
            }
            return{
                id:id,
                ciudad:ciudad
            }
        } catch (error) {
            
        }
    }

    async updateParcial(id,campos){
        try {
            for(const key in campos){
                const[result]=await connection.query(`UPDATE ciudades SET ${key}=? WHERE id_ciudad=?`,[campos[key],id])
            }
            const [mostrar]=await connection.query("SELECT * FROM ciudades WHERE id_ciudad=?",[id]);
            console.log(mostrar);
            return mostrar;

        } catch (error) {
            
        }
    }

    async validarCiudadesAsociadas(ciudad_id){
        const [rows]=await connection.query("SELECT * FROM usuarios WHERE ciudad=?",[ciudad_id]);
        return rows.length>0;
    }

    async deleteCiudad(id){
        try {
            if(await this.validarCiudadesAsociadas(id)){
                throw new Error("No se puede eliminar la ciudad porque tiene usuarios asociados");
            }
            const [result]=await connection.query("DELETE FROM ciudades WHERE id_ciudad=?",[id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }



    
}

export default Ciudades;