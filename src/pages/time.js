import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Menu from '../components/menu'
import LoadFont from '../components/loadFont'
import Cell from '../components/cell'
import { Colors } from '../helpers/colors'
import { List } from '../components/layout' 
import StyledLink from '../miniComponents/styledLink'
import { Center } from '../helpers/styles'

const items = 
[
  {
    id: 0,
    text: '11:30am', 
  },
  {
    id: 1,
    text: '11:45am',
  },
  {
    id: 2,
    text: '12:00pm',
  },
  {
    id: 3,
    text: '12:15pm',
  },
  {
    id: 4,
    text: '12:30pm',
  }, 
]
const context = {
  destination: '/index',
  gradient: {
    first: '#4A97FC',
    second: '#7B57FB',  
  },
}
const TimePage = () => {
  const queryParams = window.location.search
  const Content = styled(Center)`
    padding: 10px;
    margin-top: 10px;
    font-family: righteous;
  `
  return (
    <div>
      <LoadFont />
      <Menu
        gradient={{first: Colors.timeGradientFirst, second: Colors.timeGradientSecond}}
        currentStep={2}
      >
        Choose a Time
      </Menu>
      <List>
        { items.map((item, index) =>
          <StyledLink destination={`/confirm${queryParams}&time=${item.id}`} key={ index }>
            <Cell gradient={{ first: Colors.timeGradientFirst, second: Colors.timeGradientSecond }}>
              <Content>{ item.text }</Content>
            </Cell>
          </StyledLink>
        ) }
      </List>
    </div>
  )
}

{/* <PageContext.Provider value={ context }>
  <Layout 
    title="Choose a Time" 
    items={ items } 
    cellType={ 2 } 
    currentStep={ 2 }
  />
</PageContext.Provider> */}

export default TimePage
