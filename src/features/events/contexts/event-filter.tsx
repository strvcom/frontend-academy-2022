import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'
import React, { createContext, useState, useContext } from 'react'

export enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

type ContextValue = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
}

export const EventFilterContext = createContext<ContextValue>({
  filter: FilterType.ALL,
  setFilter: () => {},
})

export const EventFilterContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  )

  return (
    <EventFilterContext.Provider value={value}>
      {children}
    </EventFilterContext.Provider>
  )
}

export const useEventFilterContext = () => {
  return useContext(EventFilterContext)
}
