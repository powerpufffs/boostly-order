import React from 'react'

const MealCard = (props) => {
    const cardStyle = {
        backgroundColor: '#F2F2F3',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
    }
  return (
    <div style={ cardStyle }>
      <span style={{ fontSize: 24}}>{ props.restaurantTitle }</span>
      <span style={{ color: '#666666', fontSize: 20}}>{ props.address }</span>
    </div>
  )
}

export default MealCard
