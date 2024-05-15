import { format } from 'date-fns'
import type { FC } from 'react'

import type { Event } from '../../../../types'

import { UserIcon } from './parts/UserIcon'
import {
  Article,
  CountWrapper,
  Count,
  Description,
  Name,
  Title,
  Time,
  EditButton,
} from './styled'

export type Props = {
  event: Event
  isRow?: boolean
}

/**
 * Renders a single EventItem
 */
export const EventItem: FC<Props> = ({ event, isRow = false }) => (
  <Article isRow={isRow}>
    <Time>{format(new Date(event.startsAt), 'LLLL d, y – p')}</Time>
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
