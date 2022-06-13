import { isAfter, isBefore } from 'date-fns'
import { useEffect, useState, useMemo } from 'react'

import events from '../mocks/events.json'
import type { Event } from '../types'

export enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

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
 * Loads and filters/sorts the event list.
 */
const useEvents = (filter: FilterType) => {
  const [data, setData] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Process filtered/sorted events.
  const listBuilder = listBuilders[filter]
  const list = useMemo(() => listBuilder(data), [data, listBuilder])

  // Trigger the event loading.
  useEffect(() => {
    setIsLoading(true)

    // Simulates the time to load events from the backend.
    setTimeout(() => {
      setIsLoading(false)
      setData(events)
    }, 500)
  }, [])

  return { events: list, isLoading }
}

export { useEvents }
