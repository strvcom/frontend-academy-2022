import type { FC } from 'react'
import { useState } from 'react'

import { EventItem } from '~/features/ui/components/EventItem'

import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)

  const array = [
    'How to get angry',
    'Get your stuff',
    'Mamma got chocolate',
    'Drive to survive',
    'Dogs are friendly',
    'Make your dreams come true',
    'I am hungry',
    'Let me be your friend',
    'This is so cool',
  ]

  const eventItems = array.map((title, index) => (
    <li key={index}>
      <EventItem
        isRow={view === ViewType.LIST}
        title={title}
        buttonText="Edit"
      />
    </li>
  ))

  return (
    <>
      <Nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView activeView={view} onChange={setView} />
      </Nav>

      <List view={view}>{eventItems}</List>
    </>
  )
}
