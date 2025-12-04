
import {
    addProduct as createProductModel,
    deleteProduct as deleteProductModel,
    getProductById as getProductByIdModel,
    getAllProducts as getAllProductsModel,
    updateProduct as updateProductModel
} from "../models/products.models.js"; 

// Servicio para añadir producto
export const addProductService = async (product) => {
    const newProduct = await createProductModel(product);
    return newProduct;
}

// Servicio para eliminar producto
export const deleteProductService = async (id) => {
    // Eliminado console.log(id)
    await deleteProductModel(id);
    // Eliminado console.log("despues de eliminar el producto")
    return true; 
}

// --- FUNCIÓN editProductService IMPLEMENTADA ---
export const editProductService = async (id, product) => {
    const updated = await updateProductModel(id, product);
    return updated;
}
// ---------------------------------------------

// Servicio para obtener todos los productos
export const getAllProductsService = async () => {
    // Eliminado console.log("test2 dentro de servicio")
    const products = await getAllProductsModel();
    return products;
};

// Servicio para obtener producto por ID
export const getProductByIdService = async (id) => {
    const product = await getProductByIdModel(id);
    return product;
};