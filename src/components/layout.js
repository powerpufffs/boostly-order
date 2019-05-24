import React from 'react'
import { Link } from 'gatsby'
import Menu from './menu'
import LoadFont from './loadFont'
import Cell from './cell'
import Cell2 from './cell2'

const Layout = (props) => {
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '30px'
  }
  const createCell = (item) => {
    switch(props.cellType) {
      case 1:
        return <Cell item={ item }/> 
      case 2:
        return <Cell2 item={ item }/>
      default:
        return <h1>failed</h1>
    }
  }
  return (
    <div>
        <LoadFont />
        <Menu title={ props.title } currentStep={ props.currentStep }/> 
        <div style={ listStyle }>
          { Array.from(props.items).map((item, index) => { 
            return <Link to={ props.destination } style={{ textDecoration: 'none' }} key={ index } >{ createCell(item) }</Link>
          }) }
        </div>
    </div>
  ) 
}

export default Layout