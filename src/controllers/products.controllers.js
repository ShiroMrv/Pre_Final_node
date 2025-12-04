import * as productService from "../services/products.services.js"

export const addProduct = async (req, res) => {
    try{
        const product = req.body;
        const newProduct = await productService.addProductService(product)
        // Corrección: Usar 201 Created para POST exitosos
        res.status(201).json(newProduct); 
    }catch(error){
        // Corrección: Devolver un cuerpo JSON en caso de error 500
        console.error("Error adding product:", error);
        res.status(500).json({ message: 'Error interno del servidor al crear producto.' });
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        if(id){
            await productService.deleteProductService(id)
            // Corrección: Usar 204 No Content para DELETE exitosos
            res.sendStatus(204)
        }else{
            // Corrección: Devolver un cuerpo JSON en caso de error 400
            res.status(400).json({ message: 'Falta el ID del producto.' })
        }
    }catch(error){
        // Corrección: Devolver un cuerpo JSON en caso de error 500
        console.error("Error deleting product:", error);
        res.status(500).json({ message: 'Error interno del servidor al eliminar producto.' });
    }  
}

// --- FUNCIÓN editProduct DESCOMENTADA Y CORREGIDA ---
export const editProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = req.body
        if (id && product){
            await productService.editProductService(id, product)
            // Usamos 200 OK y un mensaje simple
            res.status(200).json({ message: 'Producto actualizado con éxito.' });
        }else{
            // Corrección: Devolver un cuerpo JSON en caso de error 400
            res.status(400).json({ message: 'Faltan ID o datos del producto.' })
        }
    }catch(error){
        // Corrección: Devolver un cuerpo JSON en caso de error 500
        console.error("Error editing product:", error);
        res.status(500).json({ message: 'Error interno del servidor al editar producto.' });
    }
}
// ----------------------------------------------------

export const getAllProducts = async (req, res) => {
    try{
        // Eliminado console.log("paso1")
        const products = await productService.getAllProductsService()
        // Eliminado console.log(products)
        res.status(200).json(products);
    }catch(error){
        // Corrección: Devolver un cuerpo JSON en caso de error 500
        console.error("Error getting all products:", error);
        res.status(500).json({ message: 'Error interno del servidor al obtener productos.' });
    }
};

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            const product = await productService.getProductByIdService(id)
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }else{
            // Corrección: Devolver un cuerpo JSON en caso de error 400
            res.status(400).json({ message: 'Falta el ID del producto.' })
        }
    }catch(error){
        // Corrección: Devolver un cuerpo JSON en caso de error 500
        console.error("Error getting product by ID:", error);
        res.status(500).json({ message: 'Error interno del servidor al obtener el producto.' });
    }
};