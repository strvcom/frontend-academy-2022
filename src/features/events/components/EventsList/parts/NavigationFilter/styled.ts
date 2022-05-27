import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const List = styled.ul`
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li<{ isActive?: boolean }>`
  display: inline-block;
  margin-right: 3.2rem;
  color: ${(props) => (props.isActive ? colors.text.base : colors.text.tabs)};

  button {
    ${StyleReset}
    ${typography.label.small}
    cursor: pointer;
  }
`
