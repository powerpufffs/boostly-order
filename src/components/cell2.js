import React from 'react'

const Cell2 = (props) => {
  const cellStyle = { 
    position: 'relative',
    width: '78%',
    height: 'auto',
    margin: '5px auto',
    padding: '0px 30px',
    background: `linear-gradient(to right, ${ props.gradient.first }, ${ props.gradient.second })`,
    borderRadius: 12,
    color: '#FFFFFF',
    alignSelf: 'center',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.5)',
    fontFamily: 'righteous',
    '&:hover': {
        filter: 'brightness(50%)',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={ cellStyle }>
        <h1 style={{ fontSize: '18px' }}>{ props.item.text }</h1>
    </div>
  )
}

export default Cell2


