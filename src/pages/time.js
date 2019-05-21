import React from 'react'
import Layout from '../components/layout'

const items = 
[
  {
    text: '11:30am', 
  },
  {
    text: '11:45am',
  },
  {
    text: '12:00pm',
  },
  {
    text: '12:15pm',
  },
  {
    text: '12:30pm',
  }, 
]
const gradient =
{
    first: '#4A97FC',
    second: '#7B57FB',   
}
const TimePage = () => {
  return (
    <div>
      <Layout 
        title="Choose a Time" 
        items={ items } 
        gradient={ gradient } 
        cellType={ 2 } 
        currentStep={ 3 }
      />
    </div>
  )
}

export default TimePage
