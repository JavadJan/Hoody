import React, { lazy } from 'react'
import { getItemsById } from '../../../../DB/getItems'

import { OthersItems } from './OthersItems'
import { UserItems } from './UserItems'
import { useEffect , useState } from 'react'
import { useUser } from '../../../../DB/useUser'


export const MainContent = () => {
    const { user: { id } } = useUser()
    const [items, setItems] = useState(null)

    //3. third way with using useEffect
    useEffect(() => {
        getItemsById(id).then((data) => {
            setItems(data)
        })
    }, [id])






    return (
        <div className='main-profileContent'>
            <OthersItems />
            {items ? <UserItems id={id} items={items} /> : ""}
        </div>
    )
}
