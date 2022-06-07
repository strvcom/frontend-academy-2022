import type { FC } from 'react'
import { useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { ViewType } from './types'

import { useEvents } from '../../hooks/useEvents'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */
export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  const { data: events, isLoading } = useEvents()

  return (
    <>
      <Nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView activeView={view} onChange={setView} />
      </Nav>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List view={view}>
          {events.map((event) => (
            <li key={event.id}>
              <EventItem event={event} isRow={view === ViewType.LIST} />
            </li>
          ))}
        </List>
      )}
    </>
  )
}
