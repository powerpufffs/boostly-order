import React from 'react'
import { PageContext } from '../context/PageContext'
import EllipseBackground from '../miniComponents/elipseBackground'
import Title from '../miniComponents/title'
import SelectionBox from '../components/selectionBox'
import RoundedButton from '../miniComponents/roundedbutton'
import LoadFont from '../components/loadFont'
import { Colors } from '../helpers/colors'

const context = {
  destination: '/index',
  gradient: {
    first: '#7551F7',
    second: '#7551F7',  
  },
}
const ConfirmPage = () => {
  const containerStyle = {
    position: 'relative',
    margin: 0,
    padding: 0,
    height: 80,
  }
  const titleStyle = {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
  }
  return (
    <div style={{ fontFamily: 'righteous' }}>
      <PageContext.Provider value={ context }>
        <div style={ containerStyle }>
          <EllipseBackground />
          <div style={ titleStyle }>
            <Title>Confirm Order</Title>
          </div>
          <div style={{ marginTop: 15 }}>
            <SelectionBox>
              <RoundedButton style={{
                height: '40px',
                backgroundColor: Colors.white,
                zIndex: '1',
                width: '40%',
              }} data={{
                text: 'Change',
              }} />
              <RoundedButton style={{
                height: '40px',
                backgroundColor: Colors.purple,
                zIndex: '1',
                width: '40%',
              }} data={{
                text: 'Confirm',
              }} />
            </SelectionBox>
          </div>
        </div>
      </PageContext.Provider>
    </div>
  )
}

export default ConfirmPage
