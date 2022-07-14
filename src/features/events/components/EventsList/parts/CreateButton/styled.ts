import styled from 'styled-components'

import { theme } from '~/features/ui'

export const CreateLink = styled.a`
  ${theme.elevations[900]}
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 5.6rem;
  height: 5.6rem;
  margin: 3.2rem;
  border-radius: 50%;
  color: ${theme.colors.text.inverted};
  cursor: pointer;
  background-color: ${theme.colors.background.dark};
`
