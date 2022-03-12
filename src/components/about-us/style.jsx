/** @format */

import styled from 'styled-components'
import {back1, back2, back3, back4} from '../../utils/imgExport'

export const AboutAs = styled.div`
	height: 966px;
	position: relative;
	padding-top: 75px;
	background: url(${back1}), url(${back2}), url(${back3}), url(${back4});
	background-position: top -250px right 9px, top 3px left 5px,
		bottom -35px left 209px, bottom 11px right 1px;
	background-attachment: local;
	background-repeat: no-repeat;
	background-color: #f8f8f8;
	overflow: hidden;
	margin-top: 4rem;
	h1 {
		font-size: 48px;
		line-height: 58px;
		text-align: center;
		color: #3e4043;
		margin-bottom: 50px;
		position: relative;
	}
	.grid {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		p {
			width: 460px;
			font-size: 16px;
			line-height: 190%;
			text-align: justify;
			margin-right: 150px;
		}
		.imgs {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			img {
				width: 400px;
				margin: 15px 0;
				z-index: 2;
			}
		}
		.absolute {
			position: absolute;
			right: 0;
			bottom: -50px;
			z-index: 1;
		}
	}
	@media (max-width: 1024px) {
		.grid {
			p {
				width: 360px;
			}
			.absolute {
				transform: scale(0.7);
				right: -150px;
			}
		}
	}
	@media (max-width: 980px) {
		& {
			height: 100%;
			background: none;
		}
		.grid {
			flex-wrap: wrap-reverse;
			padding: 40px;
			p {
				width: 80%;
				margin: 60px auto;
			}
			.imgs {
				width: 80%;
				margin: 0 auto;
				img {
					width: 100%;
				}
			}
		}
		.absolute {
			display: none;
		}
	}
	@media (max-width: 760px) {
		.grid {
			padding: 40px 0;
		}
	}
`
