import { isAfter, isBefore } from 'date-fns'
import type { FC } from 'react'
import { useMemo, useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { Nav, List, ListItem } from './styled'
import { ViewType, FilterType } from './types'

import { useEvents } from '../../hooks/useEvents'
import type { Event } from '../../types'

const sorts = {
  asc: (a: Event, b: Event) => (a.startsAt < b.startsAt ? -1 : 1),
  desc: (a: Event, b: Event) => (a.startsAt > b.startsAt ? -1 : 1),
}

const filters = {
  future: (event: Event) => isAfter(new Date(event.startsAt), new Date()),
  past: (event: Event) => isBefore(new Date(event.startsAt), new Date()),
}

const { ALL, FUTURE, PAST } = FilterType

const listBuilders = {
  [ALL]: (events: Event[]) => [...events].sort(sorts.asc),
  [FUTURE]: (events: Event[]) => events.filter(filters.future).sort(sorts.asc),
  [PAST]: (events: Event[]) => events.filter(filters.past).sort(sorts.desc),
}

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */
export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const { data, isLoading } = useEvents()
  const events = useMemo(() => listBuilders[filter](data), [data, filter])

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
