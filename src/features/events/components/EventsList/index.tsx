import type { FC } from 'react'
import { useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)

  return (
    <>
      <Nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView activeView={view} onChange={setView} />
      </Nav>

      <List view={view}>
        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>

        <li>
          <EventItem isRow={view === ViewType.LIST} />
        </li>
      </List>
    </>
  )
}
