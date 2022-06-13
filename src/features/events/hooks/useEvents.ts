import { isAfter, isBefore } from 'date-fns'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/features/api'

import { FilterType } from '../contexts/event-filter'
import type { Event } from '../types'

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

const initialData: Event[] = []

/**
 * Loads and filters/sorts the event list.
 */
const useEvents = (filter: FilterType) => {
  const result = useQuery<Event[], Error>('events', async () => {
    const response = await api.get('/events')

    if (!response.ok) {
      throw new Error(`Failed to load events`)
    }

    return (await response.json()) as Event[]
  })

  const { data = initialData } = result

  // Process filtered/sorted events.
  const listBuilder = listBuilders[filter]
  const events = useMemo(() => listBuilder(data), [data, listBuilder])

  return { ...result, events }
}

export { useEvents }
