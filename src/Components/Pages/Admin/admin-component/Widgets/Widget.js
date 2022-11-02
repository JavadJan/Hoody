import React from 'react'
import './Widget.scss'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilClinicMedical } from '@iconscout/react-unicons'

import { UilStore } from '@iconscout/react-unicons'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'
import { UilAngleUp } from '@iconscout/react-unicons'

export const Widget = ({type}) => {
    let data ; 
    switch (type) {
        case 'Users':
            data={
                title:"USERS",
                earn:false ,
                link:"See all users",
                icon:(<UilUser className="icon" style={{ }} />)
            }
            break;
            case 'Products':
            data={
                title:"PRODUCTS",
                earn:true ,
                link:"See all products",
                icon:(<UilStore className="icon" style={{}} />)
            }
            break;
            case 'NGO':
            data={
                title:"NGO",
                earn:false ,
                link:"See all NGO",
                icon:(<UilClinicMedical className="icon" />)
            }
            break;
            case 'Market':
            data={
                title:"MARKET",
                earn:true ,
                link:"See all markets",
                icon:(<UilShoppingCartAlt className="icon" />)
            }
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>2323412</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className={`percentage ${data.earn ? 'positive' : 'negative'}`}>
                    {!data.earn ? (<UilAngleDown />) :<UilAngleUp/>}  30%
                </div>
                {data.icon}
            </div>
        </div>
    )
}
