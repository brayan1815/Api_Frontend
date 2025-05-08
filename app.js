import express from "express";
import bodyParser from "body-parser";

import ciudades_routes from "./routes/ciudades_routes.js"
// import generos_routes from "./routes/generos_routes.js"
// import lenguajes_routes from "./routes/lenguajes_routes.js"
// import usuarios_routes from "./routes/usuarios_routes.js"



const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/ciudades",ciudades_routes)
// app.use("/generos",generos_routes)
// app.use("/lenguajes",lenguajes_routes)
// app.use("/usuarios",usuarios_routes)

app.listen(3000, () => {
  console.log("hola chamos")
});