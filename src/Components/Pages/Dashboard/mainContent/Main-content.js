import React, { lazy } from 'react'
import { getItems, getItemsById } from '../../../../DB/getItems'

import { OthersItems } from './OthersItems'
import { UserItems } from './UserItems'
import { db } from '../../../../DB/firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { useUser } from '../../../../DB/useUser'
import { useItems } from '../../../../DB/useItems'
import { async } from '@firebase/util'

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
           { items ? <UserItems id={id} items={items} /> : ""}
        </div>
    )
}
