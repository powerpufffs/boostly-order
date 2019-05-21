import React from 'react'
import { Link } from 'gatsby' 
import CircleOne from '../components/images/circleOne.svg'
import CircleTwo from '../components/images/circleTwo.svg'
import CircleThree from '../components/images/circleThree.svg'
import Spacing from '../components/images/spacing.svg'

const circles = [CircleOne, Spacing, CircleTwo, Spacing, CircleThree]
const destinations = ['/', '/method', '/time']

const Menu = (props) => {
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
    const ovalBackground = {
        content: `''`,
        position: 'absolute',
        width: '130%',
        height: '250%',
        background: `linear-gradient(to right, ${ props.gradient.first }, ${ props.gradient.second })`,
        borderRadius: '50%',
        marginLeft: '50%',
        transform: 'translate(-50%, -45%)',
        boxShadow: '0 5px 20px #666666',
        zIndex: '-1',
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
            <span style={ ovalBackground }/> 
            <div style={ menuStyle }>
                { circles.map((circle, index) => { 
                    let iteration = Math.floor((index+1)/2)
                    console.log(`currentStep: ${props.currentStep} iteration: ${iteration}}`)
                    if(circle == Spacing) {
                        return <img src={ circle } style={ iteration <= props.currentStep ? selectedSpacingStyle : spacingStyle }/>
                    } else {
                        return <Link to={ destinations[iteration] }><img src={ circle } style={ iteration <= props.currentStep ? selectedCircleStyle : circleStyle }/></ Link>
                    }
                }) }
            </div>
            <h1 style={ titleStyle }>{ props.title } </h1>
        </div>
    ) 
}

export default Menu