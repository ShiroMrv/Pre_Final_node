import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"
import rutasLog from "./src/routes/auth.routes.js"
import rutasProductos from "./src/routes/products.routes.js"

// Cargar variables de entorno al inicio
configDotenv(); 

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  
    allowedHeaders: ['Content-Type', 'Authorization'],          
    exposedHeaders: ['Content-Length'],                         
    credentials: true,                                          
    maxAge: 600,                                                
    optionsSuccessStatus: 204                                   
}

app.use(cors(corsConfig))
app.use(express.json())

// --- CAMBIOS AQUÍ: Se añade el versionamiento /v1 ---
app.use("/api/v1", rutasLog)

app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});

app.use("/api/v1", rutasProductos)
// ---------------------------------------------------

app.use((req, res, next) => {
    // Corrección: Usar JSON para el error 404
    res.status(404).json({ message: 'Recurso no encontrado o ruta inválida' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})