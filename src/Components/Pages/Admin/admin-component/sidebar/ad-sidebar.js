import React from 'react'
import './sidebar.scss'
import logo1 from '../../../../../assets/logo1.png'
import { UilCreateDashboard } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilStore } from '@iconscout/react-unicons'
import { UilCloudShare } from '@iconscout/react-unicons'
import { UilClinicMedical } from '@iconscout/react-unicons'
import { UilChartBar } from '@iconscout/react-unicons'
import { UilUserCircle } from '@iconscout/react-unicons'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'>
                <div className='logo'>
                    <img src={logo1} alt="Logo" />
                </div>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <UilCreateDashboard className='icon'/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
                    <li>
                        <UilUser className='icon'/>
                        <span>users</span>
                    </li>

                    <li>
                        <UilStore className='icon'/>
                        <span>Items</span>
                    </li>

                    <li>
                        <UilCloudShare className='icon'/>
                        <span>locals</span>
                    </li>

                    <li>
                        <UilClinicMedical className='icon'/>
                        <span>NGOs</span>
                    </li >
                    <li>
                        <UilChartBar className='icon'/>
                        <span>Logs</span>
                    </li >
                    
                    <p className="title">User</p>
                    <li>
                        <UilUserCircle className='icon'/>
                        <span>Profile</span>
                    </li >


                    <li>
                        <UilSetting className='icon'/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <UilSignOutAlt className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul >
            </div >
        </div >
    )
}
