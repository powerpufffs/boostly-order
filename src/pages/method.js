import React from 'react'
import { PageContext } from '../context/PageContext'
import Layout from '../components/layout'

const items = 
[
    {
        text: 'Pick Up', 
    },
    {
        text: 'Dine In',
    },
    {
        text: 'Delivery'
    } 
]
const context = {
    destination: '/time',
    gradient: {
        first: '#44D1AE',
        second: '#479EFA',   
    },
}
const MethodPage = () => {
    return (
        <div>
             <PageContext.Provider value={ context }>
                <Layout title="Choose a Method" 
                    items={ items } 
                    cellType={ 2 } 
                    destination={ '/time' }
                    currentStep={ 1 }
                />
             </PageContext.Provider>
        </div>
    )
}

export default MethodPage