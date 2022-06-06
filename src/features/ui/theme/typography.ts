import { css } from 'styled-components'

import { colors } from './colors'
import { mq } from './mq'

export const font = {
  base: '"Hind", sans-serif',
  headings: '"Hind", sans-serif',
  quotes: '"Playfair Display", sans-serif',
}

const allHeadingsStyle = css`
  font-family: ${font.headings};
  font-weight: inherit;
`

const allLabelsStyle = css`
  font-family: ${font.base};
  font-weight: inherit;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
`

const allParagraphsStyle = css`
  color: ${colors.text.dimmed};
`

export const typography = {
  heading: {
    all: allHeadingsStyle,
    h1: css`
      ${allHeadingsStyle}
      font-size: 3rem;

      ${mq.medium} {
        font-size: 4.5rem;
      }
    `,
    h2: css`
      ${allHeadingsStyle}
      font-size: 2.4rem;

      ${mq.medium} {
        font-size: 2.8rem;
      }
    `,
    h3: css`
      ${allHeadingsStyle}
      font-size: 2rem;

      ${mq.medium} {
        font-size: 2.2rem;
      }
    `,
    h4: css`
      ${allHeadingsStyle}
      font-size: 1.8rem;

      ${mq.medium} {
        font-size: 1.8rem;
      }
    `,
  },
  label: {
    all: allLabelsStyle,
    small: css`
      ${allLabelsStyle}
      font-size: 1.2rem;
    `,
    medium: css`
      ${allLabelsStyle}
      font-size: 1.4rem;
    `,
    large: css`
      ${allLabelsStyle}
      font-size: 1.6rem;
    `,
  },
  paragraph: {
    small: css`
      ${allParagraphsStyle}
      font-size: 1.4rem;
    `,
    normal: css`
      ${allParagraphsStyle}
      font-size: 1.6rem;
    `,
    large: css`
      ${allParagraphsStyle}
      font-size: 1.8rem;
    `,
  },
}
