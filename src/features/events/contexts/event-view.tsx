import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'
import React, { createContext, useState, useContext } from 'react'

export enum ViewType {
  GRID = 'GRID',
  LIST = 'LIST',
}

type ContextValue = {
  view: ViewType
  setView: (view: ViewType) => void
}

export const EventViewContext = createContext<ContextValue>({
  view: ViewType.GRID,
  setView: () => {},
})

export const EventViewContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)

  const value = useMemo(
    () => ({
      view,
      setView,
    }),
    [view]
  )

  return (
    <EventViewContext.Provider value={value}>
      {children}
    </EventViewContext.Provider>
  )
}

export const useEventViewContext = () => {
  return useContext(EventViewContext)
}
