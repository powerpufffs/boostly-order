import React from 'react'
import { Colors } from '../helpers/colors'

const RoundedButton = (props) => {
    const buttonStyle = {
        height: props.style.height,
        width: props.style.width,
        borderRadius: `calc(${props.style.height}/2)`,
        backgroundColor: props.style.backgroundColor,
        color: props.style.backgroundColor == Colors.white ? Colors.black : Colors.white,
        zIndex: props.style.zIndex,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={ buttonStyle }>
            { props.data.text }
        </div>
    )
}

export default RoundedButton 