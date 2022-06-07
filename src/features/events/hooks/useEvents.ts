import { useEffect, useState } from 'react'

import events from '../mocks/events.json'
import type { Event } from '../types'

/**
 * Loads the full event list.
 */
const useEvents = () => {
  const [data, setData] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    // Simulates the time to load events from the backend.
    setTimeout(() => {
      setIsLoading(false)
      setData(events)
    }, 500)
  }, [])

  return { data, isLoading }
}

export { useEvents }
