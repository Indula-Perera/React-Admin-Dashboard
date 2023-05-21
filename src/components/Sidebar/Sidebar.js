import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'



export default function Sidebar() {
  return (
    <div className='Sidebar'>
        {/*Logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
            <span>Sh<span>o</span>ps</span>
      </div>
    </div>
  )
}
