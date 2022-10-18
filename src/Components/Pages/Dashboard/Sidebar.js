import React from 'react'
import Default from './Default.png'
export const Sidebar = () => {
  return (
    <div className='sidebar-profile'>
      <div className="sidebar-content">
        <div className='user-pic'>
          <img src={Default} alt="" />
          <div>@username</div>
          <button>Edit</button>
        </div>

        <ul>
          <li>
            <i class="uil uil-chat">
            </i>
          </li>
          <li>
            <i class="uil uil-plus">
            </i>
          </li>
          <li>
            <i class="uil uil-setting"></i>
          </li>
          <li>
            <i class="uil uil-signout">
            </i>
            {/* <i class="uil uil-signin">
            </i> */}
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
