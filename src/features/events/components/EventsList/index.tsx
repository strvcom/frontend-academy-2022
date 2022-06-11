import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { Nav, List, ListItem } from './styled'
import { ViewType } from './types'

import { useDashboardContext } from '../../contexts/dashboard'
import { useEventsContext } from '../../contexts/events'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */
export const EventsList: FC = () => {
  const { filter, setFilter, view, setView } = useDashboardContext()
  const { events, isLoading, error } = useEventsContext()

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
