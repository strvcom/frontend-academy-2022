import styled, { css } from 'styled-components'

import { Button, theme } from '~/features/ui'

export const Title = styled.h3`
  ${theme.typography.heading.h3}
  color: ${theme.colors.text.base};
  margin-top: 1rem;
`

export const Name = styled.p``

export const Description = styled.p`
  ${theme.typography.paragraph.normal}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  grid-column: 1/3;
  height: 5.1rem;
  margin: 1.6rem 0;
  overflow: hidden;
  text-overflow: ellipsis;

  ${theme.mq.medium} {
    margin: 3.4rem 0 2.4rem;
    grid-column: 1/1;
  }
`

export const CountWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column: 1/1;
  align-items: center;
  gap: 0.8rem;
`

export const Count = styled.p``

export const EditButton = styled(Button).attrs({
  accent: 'primary',
  type: 'button',
  size: 'small',
})`
  grid-column: 2/2;
`

export const Time = styled.time`
  color: ${theme.colors.text.light};
`

export const Article = styled.article<{ isRow: boolean }>`
  ${theme.elevations[100]}
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  border-radius: 2px;
  background-color: ${theme.colors.background.light};

  ${(props) =>
    props.isRow &&
    css`
      padding: 2.4rem 1.6rem;

      > * {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /*
        We could also modify the styles within each of the components,
        but that would mean we would have to pass the isRow variable
        in each of them.
      */

      ${Title} {
        margin: 0;
      }

      ${Description} {
        -webkit-line-clamp: 1;
        margin: 0 0 0.8rem;
        height: auto;
      }

      ${CountWrapper} {
        svg {
          display: none;
        }
      }

      ${theme.mq.smallOnly} {
        display: grid;
        grid-template-columns: 1fr auto;

        ${Title}, ${Description} {
          order: -1;
          grid-column: 1 / 3;
        }

        > *:last-child {
          grid-column: 2;
          grid-row: 3 / 5;
          align-self: center;
        }

        ${Name} {
          display: none;
        }
      }

      ${theme.mq.medium} {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem 3.2rem;

        > * {
          flex: 1;
          width: 0;
        }

        ${Title}, ${Description} {
          flex: 3;
          margin: 0;
        }

        ${Title} {
          ${theme.typography.heading.h4}
          order: 1;
          margin-top: 0;
          line-height: 2.4rem;
        }

        ${Name} {
          order: 3;
        }

        ${Description} {
          order: 2;
        }

        ${EditButton} {
          order: 6;
          justify-self: end;
          flex: 0 0 auto;
          width: auto;
        }

        ${CountWrapper} {
          order: 5;
        }

        ${Time} {
          order: 4;
          flex: 0 0 12em;
        }
      }
    `}
`
