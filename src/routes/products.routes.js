import express from "express"
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    // --- editProduct AÑADIDO A LAS IMPORTACIONES ---
    editProduct 
} from "../controllers/products.controllers.js"
import { authentication } from "../midleware/authentication.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

// Corrección RESTful: POST a la colección (sin /create)
routes.post("/products", authentication, addProduct) 

routes.delete("/products/:id",authentication, deleteProduct)

// --- RUTA PUT DESCOMENTADA Y CORRECTA ---
routes.put("/products/:id", authentication, editProduct) 

export default routes;