import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const CreateLink = styled.a`
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
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${colors.background.dark};
`
