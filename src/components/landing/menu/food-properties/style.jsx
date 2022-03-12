import Data from './data'
import styled from 'styled-components'
const FoodProperty = styled.div`
	transform: scale(${size => (size ? 1 : 1)});
	max-width: 400px;
	margin: 3px auto;
	align-content: center;
	align-items: flex-end;
	display: grid;
	grid-template-areas:
		'img rec rec rec'
		'img h3 p  cost'
		'img data data cost';
	img {
		align-self: center;
		justify-self: center;
		grid-area: img;
	}
	.recommend {
		text-align: center;
		border-radius: 18px;
		font-weight: 600;
		font-size: 9px;
		width: 90px;
		height: 18px;
		line-height: 18px;
		background: #ffc339;
		grid-area: rec;
		margin: 0;
	}
	.food-name {
		grid-area: h3;
		margin: 0;
		font-size: 16px;
	}
	.cost {
		margin-left: 10px;
		align-self: center;
		padding: 0;
		grid-area: cost;
		font-weight: bold;
		font-size: 24px;
		color: #ffc339;
	}
	.data {
		color: #a4a4a4;
		grid-area: data;
		margin: 0;
		font-size: 11px;
	}
	.line {
		max-width: 60px;
		height: 10px;
		border-top: 1px solid #a4a4a4;
	}
	@media screen and (max-width: 900px) {
		grid-template-areas:
			'img img img '
			'rec rec p'
			'h3 h3 cost'
			'data data cost';
	}
`
export default FoodProperty
