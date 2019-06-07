import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled';
import { textShadowStyle } from '../helpers/styles';

export const List = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 95%;
  color: white;
`

export const Title = ({size=20, children}) => {
  return ( 
    <div css={css`
     ${ textShadowStyle }
     font-size: ${size}px; 
    `}>
      { children }
    </div>
  )
}