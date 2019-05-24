import React, { useContext } from 'react'
import { PageContext } from '../context/PageContext'

const EllipseBackground = (props) => {
    const value = useContext(PageContext)
    const background = {
        content: `''`,
        position: 'absolute',
        width: '130%',
        height: '250%',
        background: `linear-gradient(to right, ${ value.gradient.first }, ${ value.gradient.second })`,
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