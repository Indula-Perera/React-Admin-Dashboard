import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'

export default function Sidebar() {

  const [selected, setSelected] = useState (0)

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
              <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}

              >
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
