import type { FC } from 'react'

import { Article, Count, Description, Name, Title, EditButton } from './styled'

type Props = {
  isRow: boolean
}

export const EventItem: FC<Props> = ({ isRow }) => (
  <Article isRow={isRow}>
    <time>April 4, 2017 – 2:17 PM</time>
    <Title>How to get angry</Title>
    <Name>Tom Watts</Name>
    <Description>I will show you how to get angry in a second</Description>
    <Count>
      9 <span>of</span> 20
    </Count>
    <EditButton>Edit</EditButton>
  </Article>
)
