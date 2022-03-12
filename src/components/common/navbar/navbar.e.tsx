import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {Container as AsContainer} from '../global-style/global-style'
import {colors} from '../../../utils/data'

const {white} = colors

// styles
const flex = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`

// elements
export const Wrapper = styled.header<{bgColor?: string}>`
	padding: 20px 0;
	height: 100px;
	position: relative;

	${({bgColor = ''}) =>
		bgColor
			? css`
					background-color: ${bgColor};
			  `
			: ''}
	top: -100%;

	&.show {
		width: 100%;
		z-index: 11;
		background-color: #000;
		top: 0;
		transition: top 0.3s ease 0s;
		height: 80px;
		padding: 10px 0;
	}
	@media (max-width: 1200px) {
		padding: 35px 0;
	}
	@media (max-width: 350px) {
		padding: 15px 0;
	}
`

export const Container = styled(AsContainer)`
	${flex}
`

export const LogoLink = styled(Link)``

export const ImgLogo = styled.img``

export const Nav = styled.nav`
	${flex}
	width: 80%;
	transition: 0.5s right ease-in-out;
`

export const List = styled.ul`
	${flex}
	list-style-type: none;
	width: 58%;
`

export const ListItem = styled.li``

export const ListLink = styled(Link)`
	color: ${white};
	font-weight: 500;
	text-transform: uppercase;
	position: relative;
	transition: 0.3s opacity ease-in-out;
	&:hover {
		opacity: 0.7;
	}
`

export const Panel = styled.div`
	padding: 10px 20px;
	background-color: $yellow;
	color: $black-text;
	font-weight: 600;
	border-radius: 25px;
	transition: 0.2s all ease-in-out;
	&:hover {
		background-color: $white;
	}
	img {
		margin-right: 10px;
	}
`
