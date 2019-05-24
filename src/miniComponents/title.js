import React from 'react'
import LoadFont from '../components/loadFont';

const Title = (props) => {
  const titleStyle = {
    fontFamily: 'righteous',
    fontSize: 24,
    color: 'white',
    textShadow: '0px 4px 15px rgba(0,0,0,0.8)'
  }
  return (
    <div>
        <LoadFont />
        <div style={ titleStyle }>
         { props.children }
        </div>
    </div>
  )
}

export default Title
