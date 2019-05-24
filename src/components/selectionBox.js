import React from 'react'
import Roundedbutton from '../miniComponents/roundedbutton'
import MealCard from '../components/mealCard'

const SelectionBox = (props) => {
    const boxStyle = {
        borderRadius: 12,
        backgroundColor: 'white',
        height: 'auto',
        width: '85%',
        padding: 20,
        margin: '0 auto',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.5)',
        textAlign: 'center',
    }
    const buttonContainer = { 
        marginTop: 20,
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around',
    }
    return (
        <div>
            <div style={ boxStyle }>
                <h2 style={{ marginTop: 0 }}>I expect to pick up The Margherita around 11:45 at:</h2>
                <MealCard restaurantTitle='Midici' address='541 E University Pkwy B, Orem, UT 84097'/>
                <div style={ buttonContainer }>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default SelectionBox
