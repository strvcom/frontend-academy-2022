import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const List = styled.ul`
  display: none;
  padding: 0;
  list-style: none;

  ${mq.medium} {
    display: block;
  }
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

export const MobileToggleLabel = styled.label`
  ${typography.label.small}
  color: ${colors.text.tabs};

  ${mq.medium} {
    display: none;
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    border: 0.5em solid transparent;
    border-top-color: currentColor;
    border-bottom-width: 0;
    color: ${colors.text.base};
  }

  select {
    ${StyleReset}
    color: ${colors.text.base};
    cursor: pointer;
  }
`
