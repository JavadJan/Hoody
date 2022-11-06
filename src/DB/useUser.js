import { useState , useEffect , useContext } from "react"
import { userContext } from "../Context/userContext"
import { getUserById } from "./DoesUserExist"

export const useUser = () => {
    const [activeUser, setActiveUser] = useState({})
    const { user } = useContext(userContext)
    useEffect(() => {
        async function getUserObjByUserId() {
            const [response] = await getUserById(user.uid)
            console.log('response:', typeof (response), response, user.uid)
            setActiveUser(response)
        }

        if (user?.uid) {
            getUserObjByUserId()
        }
    }, [user])

    console.log('activeUser: ', activeUser)
    return { user: activeUser }
}
