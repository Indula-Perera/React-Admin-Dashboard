import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import{UilEstate} from "@iconscout/react-unicons";



export default function Sidebar() {
  return (
    <div className='Sidebar'>
        {/*Logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
            <span>Sh<span>o</span>ps</span>
      </div>
      {/*Menu*/
      <div className="menu">
        <div className="menuItem">
          <div><UilEstate/></div>
          <span>Dashboard</span>

        </div>
      </div>
      
      }
    </div>
  )
}
