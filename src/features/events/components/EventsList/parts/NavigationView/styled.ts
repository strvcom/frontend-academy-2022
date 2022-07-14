import styled, { css } from 'styled-components'

import { StyleReset, theme } from '~/features/ui'

export const ListItem = styled.li<{ isActive: boolean }>`
  display: inline-block;
  list-style: none;
  margin-left: 0.8rem;
  color: ${(props) => theme.colors.text[props.isActive ? 'base' : 'silent']};

  button {
    ${StyleReset}
    font-size: 2.4rem;

    ${(props) =>
      !props.isActive &&
      css`
        cursor: pointer;
      `}
  }
`
