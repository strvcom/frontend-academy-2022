import styled, { css } from 'styled-components'

import { theme } from '~/features/ui'

import { ViewType } from '../../contexts/event-view'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  ${theme.mq.medium} {
    padding: 0;
  }
`

export const List = styled.ul<{ view: ViewType }>`
  ${theme.typography.paragraph.small}
  display: grid;
  gap: 1.5rem;
  padding: 0;
  padding: 3rem 0 8rem;
  list-style: none;
  color: ${theme.colors.text.dimmed};

  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

      article {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;

        > *:not(:nth-last-child(4) ~ *) {
          grid-column: 1 / 3;
        }
      }
    `}
`

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
`
