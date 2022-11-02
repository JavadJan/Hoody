import React from 'react'
import './navbar.scss'
import { UilSearch } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilCommentAltMessage } from '@iconscout/react-unicons'
import Default from "./Default.png";

export const Navbar = () => {
    return (
        <div className='ad-navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search ... ' />
                    <UilSearch />
                </div>
                <div className='ad-items'>
                    <div className='item'>
                        <UilCommentAltMessage />
                        <div className='counter'>2</div>
                    </div>
                    <div className="item menu">
                        <UilListUl />
                    </div>
                    <div className="item user">
                        <img src={Default} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
