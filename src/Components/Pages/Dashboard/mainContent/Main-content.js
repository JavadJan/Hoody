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

    let t = getItemsById(id)
   let items = t.then( function (v){
        console.log(v)
        return v
    })
    items.then(function (v) {console.log(v)})
    return (
        <div className='main-profileContent'>
            <OthersItems />
            <UserItems id={id} items={items} />
        </div>
    )
}
