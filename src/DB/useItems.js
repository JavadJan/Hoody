import { useState, useEffect, useContext } from "react";
import { userContext } from "../Context/userContext";
import { getItemsById } from "./getItems";

export const useItems = async (id) => {
    const { user } = useContext(userContext)
    const [items, setItems] = useState({})

    useEffect(() => {
        async function getItemsByUserId() {
            const response = await getItemsById(id)
            console.log('response item:', typeof (response), response, user.uid)
            setItems(response)
        }
        if (user?.uid) {
            getItemsByUserId()
        }
    }, [user])

   
    return items
}