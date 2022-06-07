import styled, { css } from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { elevations } from '~/features/ui/theme/elevations'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const Title = styled.h3`
  ${typography.heading.h3}
  color: ${colors.text.base};
`

export const Name = styled.p``

export const Description = styled.p`
  ${typography.paragraph.normal}
  margin: 3.2rem 0 4rem;
`

export const CountWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem;
  align-items: center;
`

export const Count = styled.p``

export const EditButton = styled(Button).attrs({
  accent: 'primary',
  type: 'button',
  size: 'small',
})``

export const Article = styled.article<{ isRow: boolean }>`
  ${elevations[100]}
  padding: 3.2rem;
  border-radius: 2px;
  background-color: ${colors.background.light};

  ${(props) =>
    props.isRow &&
    css`
      padding: 2.4rem 1.6rem;

      > * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /*
        We could also modify the styles within each of the components,
        but that would mean we would have to pass the isRow variable
        in each of them.
      */

      ${Description} {
        margin: 0;
      }

      ${mq.smallOnly} {
        display: grid;
        grid-template-columns: 1fr auto;

        ${Title}, ${Description} {
          grid-column: 1 / 3;
          order: -1;
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

      ${mq.medium} {
        display: flex;
        align-items: baseline;
        gap: 1.5rem;
        padding: 2rem 3.2rem;

        > * {
          flex: 1;
          width: 0;
        }

        ${Title}, ${Description} {
          flex: 3;
        }

        ${Title} {
          ${typography.heading.h4}
          order: -2;
        }

        ${Description} {
          order: -1;
        }

        ${EditButton} {
          justify-self: end;
          flex: 0 0 auto;
          width: auto;
        }

        time {
          flex: 0 0 12em;
        }
      }
    `}
`
