import React, { useState, useContext } from 'react'
import { PageContext } from '../context/PageContext'

const Cell2 = (props) => {
    const [isHovered, setHover] = useState(false)
    const value = useContext(PageContext)
    const cellStyle = { 
        position: 'relative',
        width: '78%',
        height: 'auto',
        margin: '5px auto',
        padding: '0px 30px',
        background: `linear-gradient(to right, ${ value.gradient.first }, ${ value.gradient.second })`,
        borderRadius: 12,
        color: '#FFFFFF',
        alignSelf: 'center',
        boxShadow: '0px 2px 6px rgba(0,0,0,0.5)',
        fontFamily: 'righteous',
        filter: isHovered ? 'brightness(90%)' : 'brightness(100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={ cellStyle } onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <h1 style={{ fontSize: '18px' }}>{ props.item.text }</h1>
        </div>
    )
}

export default Cell2


