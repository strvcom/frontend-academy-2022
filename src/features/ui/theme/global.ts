import { createGlobalStyle } from 'styled-components'

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
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`
