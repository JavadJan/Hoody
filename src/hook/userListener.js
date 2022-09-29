import { onAuthStateChanged } from "firebase/auth"
import { useContext, useState, useEffect } from "react"
import { DbContext } from "../Context/DBContext"

export const UserListener = () => {
 const {auth} =  useContext(DbContext)
//  const [user , setUser] = useState(JSON.parse(localStorage.getItem("userAuth")))
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('userAuth')))
 useEffect(() => {
    const userListener = onAuthStateChanged(auth, (user) => {
        //when user pass authentication phase, here will give a tag that user is logged 
        //user a global state context
        if (user) {
            //signed in
            localStorage.setItem('authUser', JSON.stringify(user))
            setUser(user)
        } else {
            //signed out
            localStorage.removeItem('authUser')
            setUser(null)
        }
    })
    return () => userListener()
}, [user])

return { user }

}
