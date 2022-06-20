import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > * {
    padding: 0.5rem;
  }
`
export const InitialsButton = styled.button`
  ${typography.paragraph.small}
  border-radius: 50%;
  background-color: ${colors.background.inactive};
  font-family: 'hind', sans-serif;
  width: 40px;
  height: 40px;
  border: none;
`

export const User = styled.span`
  ${typography.paragraph.small}
  color: ${colors.text.dimmed};
`

export const DropIcon = styled.img``
