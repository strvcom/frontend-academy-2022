import { isAfter, isBefore } from 'date-fns'
import type { FC } from 'react'
import { useMemo, useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { Nav, List, ListItem } from './styled'
import { ViewType, FilterType } from './types'

import { useEvents } from '../../hooks/useEvents'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */
export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const { data, isLoading } = useEvents()

  const events = useMemo(() => {
    if (filter === FilterType.ALL) {
      return data.sort((a, b) => (a.startsAt < b.startsAt ? -1 : 1))
    } else if (filter === FilterType.FUTURE) {
      return data
        .filter((event) => isAfter(new Date(event.startsAt), new Date()))
        .sort((a, b) => (a.startsAt < b.startsAt ? -1 : 1))
    } else {
      return data
        .filter((event) => isBefore(new Date(event.startsAt), new Date()))
        .sort((a, b) => (a.startsAt > b.startsAt ? -1 : 1))
    }
  }, [data, filter])

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
