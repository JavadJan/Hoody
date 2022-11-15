import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function getItemsById(id) {
    const q = query(collection(db, 'items'), where("uid", "==", id))
    const result = await getDocs(q)
    const items = result.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
    console.log('get-items-by-userId', items)
    return items
}