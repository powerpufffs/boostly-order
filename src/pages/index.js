import React from 'react'
import { PageContext } from '../context/PageContext'
import Layout from '../components/layout'

const items = [
    {
        title: 'The Margherita',
        price: 10.00,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, voluptas!'
    },
    {
        title: 'White Bianca',
        price: 9.00,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus aliquam veniam minima? Totam, ullam!'
    },
    {
        title: 'Egg & Bacon',
        price: 10.00,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        title: 'The Margherita',
        price: 13.00,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione!'
    }
]
const context = {
    destination: '/method',
    gradient: {
        first: '#FC8F52',
        second: '#F17275',   
    },
}
const OrderPage = () => {
    return (
        <>
            <PageContext.Provider value={ context }>
                <Layout 
                    title="What'll it be?" 
                    items={ items } 
                    cellType={ 1 } 
                    destination='/method' 
                    currentStep={ 0 }
                /> 
            </PageContext.Provider>
        </>
    )
}

export default OrderPage