import { format } from 'date-fns'
import type { FC } from 'react'

import { UserIcon } from './parts/UserIcon'
import {
  Article,
  CountWrapper,
  Count,
  Description,
  Name,
  Title,
  EditButton,
} from './styled'

import type { Event } from '../../../../types'

export type Props = {
  event: Event
  isRow?: boolean
}

/**
 * Renders a single EventItem
 */
export const EventItem: FC<Props> = ({ event, isRow = false }) => (
  <Article isRow={isRow}>
    <time>{format(new Date(event.startsAt), 'LLLL d, y – p')}</time>
    <Title>{event.title}</Title>
    <Name>
      {event.owner.firstName} {event.owner.lastName}
    </Name>

    <Description>{event.description}</Description>

    <CountWrapper>
      <UserIcon />

      <Count>
        {event.attendees.length} <span>of</span> {event.capacity}
      </Count>
    </CountWrapper>

    <EditButton>Edit</EditButton>
  </Article>
)
