import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  const view: ViewType = ViewType.GRID

  return (
    <>
      <Nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView
          activeView={view}
          onChange={(viewType) => alert(viewType)}
        />
      </Nav>

      <List view={view}>
        {[...Array(10)].map((_, index) => (
          // Index should never be used as a key for dynamic data.
          // It is fine for static data like these, will be updated in the future.
          <li key={index}>
            <EventItem isRow={(view as ViewType) === ViewType.LIST} />
          </li>
        ))}
      </List>
    </>
  )
}
