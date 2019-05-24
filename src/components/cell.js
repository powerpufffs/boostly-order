import React, { useState, useContext } from 'react'
import { PageContext } from '../context/PageContext'

const Cell = (props) => {
  const [isHovered, setHover] = useState(false)
  const value = useContext(PageContext)
  const cellStyle = { 
    position: 'relative',
    width: '80%',
    height: 'auto',
    margin: '5px auto',
    padding: '4px 30px',
    background: `linear-gradient(to right, ${ value.gradient.first }, ${ value.gradient.second })`,
    borderRadius: 12,
    color: '#FFFFFF',
    alignSelf: 'center',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.5)',
    fontFamily: 'righteous',
    filter: isHovered ? 'brightness(90%)' : 'brightness(100%)'
  }
  const titleStyle = {
    display: 'flex', 
    justifyContent: 'space-between',
    padding: '8px 0px'
  }
  return (
    <div style={ cellStyle } onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={ titleStyle }>
        <span style={{ textShadow: '0px 4px 15px rgba(0,0,0,0.5)', fontSize: '18px' }}>{ props.item.title }</span>
        <span>${ props.item.price }.00</span>
      </div>
      <p style={{ marginTop: 0, fontSize: '16px' }}>{ props.item.description }</p>
    </div>
  )
}

export default Cell