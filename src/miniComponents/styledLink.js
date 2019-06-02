import React from 'react'
import { Link }  from 'gatsby'
import styled from '@emotion/styled'

const link = ({ key=0, destination, className, ...props}) => {
    return (
        <>
            <Link to={ destination } key={ key } className={ className }>
                { props.children }    
            </ Link>  
        </>
    )
}
const styledLink = styled(link)`
    text-decoration: none;
    color: white;
`
export default styledLink
