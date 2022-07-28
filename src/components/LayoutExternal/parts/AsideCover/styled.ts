import styled from 'styled-components'

import { theme } from '~/features/ui'

export const Aside = styled.aside`
  display: none;

  ${theme.mq.medium} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    max-width: 48rem;
    min-width: 30rem;
    color: ${theme.colors.text.inverted};
    text-align: center;
    background-color: ${theme.colors.background.dark};
  }
`

export const Figure = styled.figure`
  position: relative;
  padding: 8rem clamp(2rem, 2.2vw, 4rem) 4rem;
`

export const Quote = styled.q`
  display: block;
  margin: 2rem 0;
  text-align: center;
  font-size: clamp(2rem, 2.2vw, 3.6rem);
  font-family: ${theme.font.quotes};
  line-height: 1.166;
`

export const FigCaption = styled.figcaption`
  ${theme.typography.paragraph.large}
`

export const Hr = styled.hr`
  width: 1.2rem;
  border: none;
  border-top: 2px solid currentColor;
  margin: 1.5rem auto;
  color: ${theme.colors.accent.primary};
`
