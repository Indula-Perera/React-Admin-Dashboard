import React from 'react'
import{CardData} from '../../Data/Data'
import './Cards.css'
import Card from '../Card/Card'

export default function Cards() {
  return (
    <div className='Cards'>
      {CardData.map((card,id)=>{
        return(
          <div className="parentContainer">
            <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
               
            
            
            />

          </div>

        )
      })}
      
    </div>
  )
}
