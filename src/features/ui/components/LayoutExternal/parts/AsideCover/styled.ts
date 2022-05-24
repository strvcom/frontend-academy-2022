import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { font } from '~/features/ui/theme/typography'

export const Aside = styled.aside`
  display: none;

  ${mq.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    max-width: 48rem;
    min-width: 30rem;
    padding: 8rem clamp(2rem, 2.2vw, 4rem) 4rem;
    color: white;
    text-align: center;
    background-color: ${colors.background.dark};
  }
`

export const Quote = styled.q`
  display: block;
  text-align: center;
  font-size: clamp(2rem, 2.2vw, 3.6rem);
  font-family: ${font.quotes};
  line-height: 1.166;
`
