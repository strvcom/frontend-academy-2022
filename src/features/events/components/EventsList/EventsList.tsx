import type { FC } from 'react'
import { useMemo } from 'react'

import { EventItem } from '~/features/events/components/EventsList/parts/EventItem'
import { NavigationFilter } from '~/features/events/components/EventsList/parts/NavigationFilter'
import { NavigationView } from '~/features/events/components/EventsList/parts/NavigationView'
import {
  List,
  ListItem,
  Nav,
} from '~/features/events/components/EventsList/styled'
import { useEventFilterContext } from '~/features/events/contexts/event-filter'
import {
  useEventViewContext,
  ViewType,
} from '~/features/events/contexts/event-view'
import { listBuilders } from '~/features/events/hooks/useEvents'
import type { Event } from '~/features/events/types'

export type Props = {
  isLoading: boolean
  events: Event[]
}

export const EventsListComponent: FC<Props> = ({ isLoading, events: data }) => {
  const { filter, setFilter } = useEventFilterContext()
  const { view, setView } = useEventViewContext()

  // Process filtered/sorted events.
  const listBuilder = listBuilders[filter]
  const events = useMemo(() => listBuilder(data), [data, listBuilder])

  return (
    <>
      <Nav>
        <NavigationFilter activeFilter={filter} onChange={setFilter} />
        <NavigationView activeView={view} onChange={setView} />
      </Nav>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List view={view}>
          {events.map((event) => (
            <ListItem key={event.id}>
              <EventItem event={event} isRow={view === ViewType.LIST} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}
