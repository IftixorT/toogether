import React from 'react'
import styled from 'styled-components'

function MiniCartContainer(props) {
	return (
		<MiniCartStyle bgColor={props.bgColor} className="p-5">
			wassapdwad
		</MiniCartStyle>
	)
}

const MiniCartStyle = styled.div`
	background-color: ${props => props.bgColor};
`
export default MiniCartContainer
