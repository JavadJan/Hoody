import React, { lazy } from 'react'
import { getItemsById } from '../../../../DB/getItems'

import { OthersItems } from './OthersItems'
import { UserItems } from './UserItems'
import { useEffect , useState } from 'react'
import { useUser } from '../../../../DB/useUser'


export const MainContent = ({coordination , items ,setItems}) => {
    const { user: { id } } = useUser()
    

    return (
        <div className='main-profileContent'>
            <OthersItems id={id} coordination={coordination}/>
            {/* {items ? <UserItems id={id} items={items} /> : ""} */}
            <UserItems id={id} items={items} setItems = {setItems}/>
        </div>
    )
}
