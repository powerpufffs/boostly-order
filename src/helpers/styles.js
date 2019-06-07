import styled from '@emotion/styled'
import { css } from '@emotion/core'

//Flex
export const flexRowStyle = css`
    display: flex;
    flex-direction: row;
`
export const flexColStyle = css`
    display: flex;
    flex-direction: column;
`
export const centered = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const centeredx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
//Shadows
export const textShadowStyle = css`
    text-shadow: 0px 4px 15px rgba(0,0,0,0.5);
`

//Rounding
export const fullRoundingStyle = css`
    border-radius: 999px;
`

//Fonts 
export const righteousFont = css`
    font-family: righteous;
`

//Setup
export const screenFull = css`
    height: 100%;
    width: 100%;
`