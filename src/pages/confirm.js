import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled' 
import Layout from '../components/layout'
import LoadFont from '../components/loadFont'
import EllipseBackground from '../miniComponents/elipseBackground'
import { Colors } from '../helpers/colors';
import { textShadowStyle, flexRowStyle, righteousFont, centered, screenFull } from '../helpers/styles'
import Cell from '../components/cell';
import RoundButton from '../miniComponents/roundButton';

const gradient =
{
    first: Colors.purple,
    second: Colors.purple,   
}
const PositionDiv = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
`
const Title = styled.span`
    display: block;
    text-align: center;
    font-family: righteous;
    font-size: 24px;
    color: white;
    padding-top: 10px;
    padding-bottom: 36px;
`
const InfoDiv = styled.div`
    background-color: ${ Colors.grey };
    border-radius: 10px;
    margin: 16px auto;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
`
const ConfirmPage = () => {
    return (
        <div>
            <LoadFont />
            <PositionDiv css={css`${ textShadowStyle }`}>
                <EllipseBackground gradient={ gradient }/>
                <Title>Confirm Order</Title>
            </PositionDiv>
            <div css={css`display: block; padding: 0 10px ; margin: -18px 0;`}>
                <Cell gradient={{ first: Colors.white, second: Colors.white }}>
                    <div css={css`padding: 20px 48px;  `}>
                        <div css={css`text-align: center; font-size: 20px;`}>I expect to pick up The Margherita around 11:45 at:</div>
                            <InfoDiv>
                                <span>Midici</span>
                                <span css={css`text-align: center;`}>541 E University Pkwy B, Orem, UT 84097</span>
                            </InfoDiv>
                        <div css={css`${[flexRowStyle, righteousFont, screenFull]} text-align: center; height: 50px;`}>
                            <RoundButton color={ Colors.white } css={css`${ centered } width: 50%;`}>
                                <span css={css`font-size: 18px;`}>Change</span>
                            </RoundButton>
                            <RoundButton color={ Colors.purple } css={css`${ centered } width: 50%;`}>
                                <span css={css`color: ${ Colors.white }; font-size: 18px;`}>Confirm</span>
                            </RoundButton>
                        </div>
                    </div>
                </ Cell>
            </div>
        </div>
    )
}

export default ConfirmPage