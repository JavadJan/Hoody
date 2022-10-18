import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Default from './Default.png'
import logo1 from '../../../assets/logo1.png'
export const Header = ({ user }) => {
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
                        <i class="uil uil-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
