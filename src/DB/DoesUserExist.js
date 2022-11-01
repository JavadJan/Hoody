import { collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../DB/firebase'

export async function DoesUserExist (email) {
    console.log(email,db)
    const q =query(collection(db, 'users'), where("email", "==", email))
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(data)
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
