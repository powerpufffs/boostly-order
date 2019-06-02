import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core' 
import styled from '@emotion/styled'
import LoadFont from '../components/loadFont'
import Menu from '../components/menu'
import { Center } from '../helpers/styles'
import { List } from '../components/layout' 
import StyledLink from '../miniComponents/styledLink'
import Cell from '../components/cell'
import { Colors } from '../helpers/colors';

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
const MethodPage = () => {
	const Content = styled(Center)`
		padding: 10px;
		margin-top: 10px;
		font-family: righteous;
	`
	return (
		<div>
			<LoadFont />
			<Menu 
				gradient={{ first: Colors.methodGradientFirst, second: Colors.methodGradientSecond}}
				currentStep={1}
				title='Choose a Method'
			/>
			<List>
				{ items.map((item, index) => 
					<StyledLink destination='/time' key={ index }>
						<div css={css`:hover { filter: brightness(90%)}`}>
							<Cell gradient={{ first: '#44D1AE', second: '#479EFA'}}>
								<Content>{ item.text }</Content>
							</Cell>
						</div>
					</StyledLink>
				) }  
			</List>
		</div>
	)
}

export default MethodPage