import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./src/config/db.js";


dotenv.config();
//Conectar a mongo
connectDB();

const app = express();


// Configurar rutas absolutas para views/public
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());


// Rutas
app.use("/users", userRoutes);
app.use("/appointments", appointmentRoutes);

// Página principal
app.get("/", (req, res) => {
  res.send("Biosanum");
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
