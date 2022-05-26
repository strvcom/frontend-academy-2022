import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { elevations } from '~/features/ui/theme/elevations'

export const CreateLink = styled.a`
  ${elevations[900]}
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
  color: ${colors.text.inverted};
  cursor: pointer;
  background-color: ${colors.background.dark};
`
