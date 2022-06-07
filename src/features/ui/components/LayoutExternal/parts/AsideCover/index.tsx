import Image from 'next/image'
import type { FC } from 'react'

import asideImage from './assets/background.jpeg'
import { Aside, FigCaption, Figure, Hr, Quote } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <Image
      src={asideImage}
      alt="Stormtroopers"
      objectFit="cover"
      layout="fill"
      objectPosition="right"
      placeholder="blur"
      priority
      aria-hidden="true"
    />

    <Figure>
      <Quote>Great, kid. Don’t get&nbsp;cocky.</Quote>
      <Hr />
      <FigCaption>Han Solo</FigCaption>
    </Figure>
  </Aside>
)
