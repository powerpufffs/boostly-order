import React from 'react'
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
const gradient =
{
    first: '#44D1AE',
    second: '#479EFA',   
}
const MethodPage = () => {
    return (
        <div>
            <Layout title="Choose a Method" 
                items={ items } 
                gradient={ gradient } 
                cellType={ 2 } 
                destination={ '/time' }
                currentStep={ 1 }
            />
        </div>
    )
}

export default MethodPage