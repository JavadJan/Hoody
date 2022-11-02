import React, { lazy } from 'react'

import { OthersItems } from './OthersItems'
import { UserItems } from './UserItems'

export const MainContent = () => {
   


    return (
        <div className='main-profileContent'>
            {/* <div className='one'>sad</div> */}
            <OthersItems />
            <UserItems />
        </div>
    )
}
