import React from 'react'
import { Link } from 'gatsby' 
import CircleOne from '../../static/circleOne.svg'
import CircleTwo from '../../static/circleTwo.svg'
import CircleThree from '../../static/circleThree.svg'
import Spacing from '../../static/spacing.svg'
import EllipseBackground from '../miniComponents/elipseBackground';

const circles = [CircleOne, Spacing, CircleTwo, Spacing, CircleThree]
const destinations = ['/', '/method', '/time']

const Menu = ({ gradient, currentStep, ...props}) => {
    const containerStyle = {
        position: 'relative',
        padding: 0,
        margin: 0,
    }
    const menuStyle = {
        margin: '20px 0px 0px 0px',
        display: 'flex',
        justifyContent: 'center',
    }
    const titleStyle = {
        fontFamily: 'Righteous',
        marginTop: 4,
        display: 'flex',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#FFFFFF',
        textShadow: '0px 4px 15px rgba(0,0,0,0.5)' 
    }
    const spacingStyle = {
        width: 80,
        height: 30,
        display: 'flex',
        margin: '0 0',
        filter: 'opacity(50%)'
    }
    const selectedSpacingStyle = {
        width: 80,
        height: 30,
        display: 'flex',
        margin: '0 0',
    }
    const circleStyle = {
        width: 30,
        height: 30,
        filter: 'opacity(50%)'
    }
    const selectedCircleStyle = {
        width: 30,
        height: 30,
    }
    return (
        <div style={ containerStyle }>
            <EllipseBackground gradient={ gradient }/>
            <div style={ menuStyle }>
                { circles.map((circle, index) => { 
                    let iteration = Math.floor((index+1)/2)
                    if(circle === Spacing) {
                        return <img src={ circle } style={ iteration <= currentStep ? selectedSpacingStyle : spacingStyle }/>
                    } else {
                        return <Link to={ destinations[iteration] }><img src={ circle } style={ iteration <= currentStep ? selectedCircleStyle : circleStyle }/></ Link>
                    }
                }) }
            </div>
            <h1 style={ titleStyle }>{ props.children } </h1>
        </div>
    ) 
}

export default Menu