import styled from 'styled-components'
import {Container as AsContainer} from '../..'

export const Img = styled.img`
	transition: 0.3s transform cubic-bezier(0.215, 0.61, 0.355, 1);
	&:active {
		transform: scale(0.9);
	}
`

export const Container = styled(AsContainer)`
	background: url('../../../assets/images/hero/hero-bg.png'), #000;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	@media (max-width: 1150px) {
		padding-bottom: 50px;
	}
`
