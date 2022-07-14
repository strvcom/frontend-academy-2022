import styled, { createGlobalStyle } from 'styled-components'

import { colors } from '../../theme'

export const InternalGlobalStyle = createGlobalStyle`
body {
  background-color: ${colors.background.dimmed};
}
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
