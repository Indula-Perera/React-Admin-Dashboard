import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'



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
        {SidebarData.map((Item, index)=>{
            return(
              <div className="menuItem">
                <Item.icon/>
                <span>{Item.heading}</span>

              </div>
            )


        })
        
        
        
        }
      </div>
      
      }
    </div>
  )
}
