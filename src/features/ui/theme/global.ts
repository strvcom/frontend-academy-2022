import { createGlobalStyle } from 'styled-components'

import { font } from './typography'

export const GlobalStyle = createGlobalStyle`
html,
body, #__next {
  padding: 0;
  margin: 0;
  height: 100%;
}

html {
  font-size: 62.5%;
}

body {
  font: 400 1.6rem ${font.base};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
}

a {
  color: inherit;
  text-decoration: none;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`
