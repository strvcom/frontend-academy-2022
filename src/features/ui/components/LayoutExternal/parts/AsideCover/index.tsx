import type { FC } from 'react'

import { Aside, Quote } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <figure>
      <Quote>Great, kid. Don’t get&nbsp;cocky.</Quote>
      <hr />
      <figcaption>Han Solo</figcaption>
    </figure>
  </Aside>
)
