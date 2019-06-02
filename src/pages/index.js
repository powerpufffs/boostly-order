import React from 'react'
import styled from '@emotion/styled'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import LoadFont from '../components/loadFont'
import { Colors } from '../helpers/colors'
import Layout from '../components/layout'
import Menu from '../components/menu'
import StyledLink from '../miniComponents/styledLink'
import Cell from '../components/cell'
import { List } from '../components/layout'
import { flexRowStyle, textShadowStyle,  } from '../helpers/styles';

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
const data = {
	destination: '/method',
	gradient: {
		first: '#FC8F52',
		second: '#F17275',   
	},
}
const MenuPage = () => {
	const Content = styled.div`
		font-family: righteous;
		font-size: 20px;
		padding: 15px 24px;
		display: flex;
		flex-direction: column;
	`
	const createCell = (data) => {
		return <Cell data={ data } />
	} 
	return (
		<>
			<LoadFont />
			<Menu 
				gradient={{ first: Colors.indexGradientFirst, second: Colors.indexGradientSecond }}
				currentStep={ 0 }
				title="What'll it be?"  
			/>
			<List>
				{ items.map((item, index) => {
					return <StyledLink destination='/method' key={ index }>
						<div css={css`margin-top: 10px; :hover { filter: brightness(90%); }`}>
							<Cell gradient={{ first: Colors.indexGradientFirst, second: Colors.indexGradientSecond }}>
								<Content>
									<div css={css`${flexRowStyle} justify-content: space-between;`}>
										<span css={[textShadowStyle]}>{ item.title }</span>
										<span>${ item.price }.00</span>
									</div>
									<span css={css`margin-top: 8px; font-size: 16px;`}>{ item.description }</span>
								</Content>
							</Cell>
						</div>
					</StyledLink> 
				}) }
			</List>
		</>
	)
}

export default MenuPage