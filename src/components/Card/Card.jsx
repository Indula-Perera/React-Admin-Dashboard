import React from 'react'
import {useState} from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

export default function Card(props) {

  const [expended, setExpanded] = useState(false)

  return (
   <AnimateSharedLayout>
    {
      expended?(
          'Expanded'
      ):
      <CompactCard  param ={props} />
    }
   </AnimateSharedLayout>
  )
}

// CompactCard

function CompactCard ({param}){
  const Png = param.png; 
  return(
    <div className="CompactCard"
    style={{
      background : param.color.backGround,
      boxShadow: param.color.boxShadow
    }}>
      <div className="radialBar">
        <CircularProgressbar 
        value={param.barValue}
        text={`${param.barValue}%`}
        />
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}