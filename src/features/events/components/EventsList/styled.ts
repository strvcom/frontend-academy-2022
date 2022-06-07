import styled, { css } from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

import { ViewType } from './types'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  ${mq.medium} {
    padding: 0;
  }
`

export const List = styled.ul<{ view: ViewType }>`
  display: grid;
  gap: 1.5rem;
  padding: 0;
  padding: 3rem 0 8rem;
  list-style: none;

  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

      event {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;

        > *:not(:nth-last-child(3) ~ *) {
          grid-column: 1 / 3;
        }
      }
    `}
`
