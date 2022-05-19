import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'

export const EventsList: FC = () => (
  <>
    <nav>
      <NavigationFilter onChange={(filterType) => alert(filterType)} />
      <NavigationView onChange={(viewType) => alert(viewType)} />
    </nav>
    <ul>
      <EventItem />
      <EventItem />
      <EventItem />
    </ul>
  </>
)
