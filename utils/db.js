import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "brayan_adso2894667",
  password: "Aprendiz2025",
  database:"validacion"
});

export default connection;