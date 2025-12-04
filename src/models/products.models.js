import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore";


export async function getProductById(id){
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}


export async function getAllProducts(){
    const querySnapshot = await getDocs(collection(db, "products"));
    
    const products = [] 
    querySnapshot.forEach((doc) => {
        // Asegura que el ID de Firebase se incluye en el objeto
        products.push({...doc.data(), id: doc.id}) 
    });
    return products;
}


export async function addProduct(product){
    const docRef = await addDoc(collection(db, "products"), product);
    return {...product, id: docRef.id};
}


export async function deleteProduct(id){
    await deleteDoc(doc(db, "products", id));
    return true;
}


export async function updateProduct(id, product){
  await updateDoc(doc(db, "products", id), {
    ...product
  });
  return true;
}