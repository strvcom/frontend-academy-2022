import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const List = styled.ul`
  padding: 0;
  list-style: none;
  color: ${colors.text.tabs};
`

export const ListItem = styled.li<{ isActive?: boolean }>`
  display: inline-block;
  margin-right: 3.2rem;

  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.text.base};
    `}

  button {
    ${StyleReset}
    ${typography.label.small}
    cursor: pointer;
  }
`
