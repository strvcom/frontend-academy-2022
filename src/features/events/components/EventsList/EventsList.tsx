import type { FC } from 'react'
import { useMemo } from 'react'

import { useEventFilterContext } from '../../contexts/event-filter'
import { useEventViewContext, ViewType } from '../../contexts/event-view'
import { listBuilders } from '../../hooks/useEvents'
import type { Event } from '../../types'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, ListItem, Nav } from './styled'

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
