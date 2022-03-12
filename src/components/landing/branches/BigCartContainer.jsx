import React from 'react'
import styled from 'styled-components'

function BigCartContainer(props) {
	return (
		<BigCartStyle bgColor="yellow" {...props}>
			<div className="container">
				<div className="row">
					<div className="col-7">
						<p>{props.special}</p>
						<h1>{props.title}</h1>
					</div>
					<div className="col-5">
						<div className="img-con">
							<p>${props.price}</p>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</BigCartStyle>
	)
}

const BigCartStyle = styled.div`
	& {
		/* background-color: ${props => props.bgCol}; */
		background-color: ${props => props.bgColor};
	}
	border-radius: 1rem;

	.img-con {
		background-color: ${props => props.imgBg};
		border-radius: 50%;
	}
`
export default BigCartContainer
