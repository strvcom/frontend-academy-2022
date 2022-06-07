import type { FC } from 'react'

import { Article, Chip, Title } from './styled'

type Props = {}

export const Attendees: FC<Props> = () => (
  <Article>
    <Title>Attendees</Title>

    <Chip>Femi Silke</Chip>
    <Chip>Raven Susana</Chip>
    <Chip>Ludde Stef</Chip>
    <Chip>German Astrid</Chip>
    <Chip>Swapnil Jalo</Chip>
    <Chip>Spartak Juni</Chip>
    <Chip>Idunn Piety</Chip>
    <Chip>Ivo Pris</Chip>
    <Chip>Tertius Raju</Chip>
  </Article>
)
