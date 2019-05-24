import React from 'react'
import { PageContext } from '../context/PageContext'
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
const context = {
  destination: '/index',
  gradient: {
    first: '#4A97FC',
    second: '#7B57FB',  
  },
}
const TimePage = () => {
  return (
    <div>
       <PageContext.Provider value={ context }>
        <Layout 
          title="Choose a Time" 
          items={ items } 
          cellType={ 2 } 
          currentStep={ 2 }
        />
       </PageContext.Provider>
    </div>
  )
}

export default TimePage
