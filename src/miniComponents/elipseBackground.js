import React, { useContext } from 'react'

const EllipseBackground = ({ gradient }) => {
    const background = {
        content: `''`,
        position: 'absolute',
        width: '130%',
        height: '250%',
        background: `linear-gradient(to right, ${ gradient.first }, ${ gradient.second })`,
        borderRadius: '50%',
        marginLeft: '50%',
        transform: 'translate(-50%, -45%)',
        boxShadow: '0 5px 20px #666666',
        zIndex: '-1',
    }
    return (
        <div>
            <span style={ background }/>
        </div>
    )
}

export default EllipseBackground