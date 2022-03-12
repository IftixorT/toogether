import styled, {createGlobalStyle} from 'styled-components'
import {colors} from '../../../utils/data'

const {dark, white} = colors
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Urbanist", sans-serif;
}

body {
  padding: 0;
  padding-bottom: -20px;
}

html {
  overflow-x: hidden;
  height: auto;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  display: block;
}

h1 {
  font-size: 80px;
  font-weight: 900;
  color: ${white};
}

h2 {
  font-size: 48px;
  color: ${dark};
}
`

export default GlobalStyle

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 3rem;
	@media (min-width: 1700px) {
		width: 1400px;
	}
`
