import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'



export default function Sidebar() {
  return (
    <div className="Sidebar">
        {/*Logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
            <span>Sh<span>o</span>ps</span>
      </div>
      {/*Menu*/
      <div className="menu">
        {SidebarData.map((item, index)=>{
            return(
              <div className="menuItem active">
                <item.icon/>
                <span>{item.heading}</span>

              </div>
            )


        })

        }

        <div className="menuItem">
          <UilSignOutAlt/>
        </div>
      </div>
      
      }
    </div>
  )
}
