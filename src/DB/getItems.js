import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function getItemsById(id) {
    const q = query(collection(db , 'items') , where("userDocId" , "==" , id))
    const result =await getDocs(q)
    const items= result.docs.map((doc) => ({ ...doc.data(), id: doc.id })); 
    console.log('itemsssssss' , items)

    
        return items
}