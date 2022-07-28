import styled, { createGlobalStyle } from 'styled-components'

import { theme } from '~/features/ui'

export const InternalGlobalStyle = createGlobalStyle`
body {
  background-color: ${theme.colors.background.dimmed};
}
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
