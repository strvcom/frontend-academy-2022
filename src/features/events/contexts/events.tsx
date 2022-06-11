import type { FC, ReactNode } from 'react'
import React, { createContext, useContext } from 'react'

import { useDashboardContext } from './dashboard'

import { useEvents } from '../hooks/useEvents'
import type { Event } from '../types'

export type ContextValue = {
  events: Event[]
  isLoading: boolean
  error: Error | null
}

export const EventsContext = createContext<ContextValue>({
  events: [],
  isLoading: false,
  error: null,
})

export const EventsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { filter } = useDashboardContext()
  const value = useEvents(filter)

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  )
}

export const useEventsContext = () => {
  return useContext(EventsContext)
}
