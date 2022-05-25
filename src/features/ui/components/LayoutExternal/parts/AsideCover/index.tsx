import type { FC } from 'react'

import { Aside, FigCaption, Hr, Quote } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <figure>
      <Quote>Great, kid. Don’t get&nbsp;cocky.</Quote>
      <Hr />
      <FigCaption>Han Solo</FigCaption>
    </figure>
  </Aside>
)
