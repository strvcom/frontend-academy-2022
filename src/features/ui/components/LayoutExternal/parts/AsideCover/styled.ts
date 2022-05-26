import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { font, typography } from '~/features/ui/theme/typography'

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
    color: ${colors.text.inverted};
    text-align: center;
    background-color: ${colors.background.dark};
  }
`

export const Quote = styled.q`
  display: block;
  margin: 2rem 0;
  text-align: center;
  font-size: clamp(2rem, 2.2vw, 3.6rem);
  font-family: ${font.quotes};
  line-height: 1.166;
`

export const FigCaption = styled.figcaption`
  ${typography.paragraph.large}
`

export const Hr = styled.hr`
  width: 1.2rem;
  border: none;
  border-top: 2px solid currentColor;
  margin: 1.5rem auto;
  color: ${colors.accent.primary};
`
