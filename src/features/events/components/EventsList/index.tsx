import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { Nav, List, ListItem } from './styled'

import { useEventFilterContext } from '../../contexts/event-filter'
import { useEventViewContext, ViewType } from '../../contexts/event-view'
import { useEvents } from '../../hooks/useEvents'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */
export const EventsList: FC = () => {
  const { filter, setFilter } = useEventFilterContext()
  const { view, setView } = useEventViewContext()
  const { events, isLoading, error } = useEvents(filter)

  // Avoid rendering UI if event loading failed.
  if (error) {
    throw error
  }

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
