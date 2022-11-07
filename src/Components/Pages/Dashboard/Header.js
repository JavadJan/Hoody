import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Default from './dash-css/Default.png'
import logo1 from '../../../assets/logo1.png'
import { useContext } from 'react'
import { userContext } from '../../../Context/userContext'
export const Header = () => {
    const {user} = useContext(userContext) 

    
    return (
        <div className='header-profile'>
            <div className="header-content">
                <div className='logo'>
                    <img src={logo1} alt="" />
                </div>

                <div className='user-info'>
                    <div className='pic'>
                        <img src={Default} alt="" />
                    </div>

                    <div className='down'>
                        <i className="uil uil-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
