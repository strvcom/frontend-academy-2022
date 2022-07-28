import styled from 'styled-components'

import { theme } from '~/features/ui'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > * {
    padding: 0.5rem;
  }
`
export const InitialsButton = styled.button`
  ${theme.typography.paragraph.small}
  border-radius: 50%;
  background-color: ${theme.colors.background.inactive};
  font-family: 'hind', sans-serif;
  width: 40px;
  height: 40px;
  border: none;
`

export const User = styled.span`
  ${theme.typography.paragraph.small}
  color: ${theme.colors.text.dimmed};
`

export const DropIcon = styled.img``
