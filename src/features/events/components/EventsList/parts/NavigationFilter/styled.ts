import styled from 'styled-components'

import { StyleReset, theme } from '~/features/ui'

export const List = styled.ul`
  display: none;
  padding: 0;
  list-style: none;

  ${theme.mq.medium} {
    display: block;
  }
`

export const ListItem = styled.li<{ isActive?: boolean }>`
  display: inline-block;
  margin-right: 3.2rem;
  color: ${(props) => theme.colors.text[props.isActive ? 'base' : 'tabs']};

  button {
    ${StyleReset}
    ${theme.typography.label.small}
    cursor: pointer;
  }
`

export const MobileToggleLabel = styled.label`
  ${theme.typography.label.small}
  color: ${theme.colors.text.tabs};

  ${theme.mq.medium} {
    display: none;
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    border: 0.5em solid transparent;
    border-top-color: currentColor;
    border-bottom-width: 0;
    color: ${theme.colors.text.base};
  }

  select {
    ${StyleReset}
    color: ${theme.colors.text.base};
    cursor: pointer;
  }
`
