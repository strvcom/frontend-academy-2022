import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'
import React, { createContext, useState, useContext } from 'react'

import { ViewType } from '../components/EventsList/types'
import { FilterType } from '../hooks/useEvents'

export type ContextValue = {
  view: ViewType
  setView: (view: ViewType) => void
  filter: FilterType
  setFilter: (filter: FilterType) => void
}

export const DashboardContext = createContext<ContextValue>({
  view: ViewType.GRID,
  setView: () => {},
  filter: FilterType.ALL,
  setFilter: () => {},
})

export const DashboardContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const value = useMemo(
    () => ({
      view,
      setView,
      filter,
      setFilter,
    }),
    [view, filter]
  )

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
