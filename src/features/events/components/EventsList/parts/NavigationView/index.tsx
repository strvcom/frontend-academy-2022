import type { FC } from 'react'

import { GridIcon } from './parts/GridIcon'
import { ListIcon } from './parts/ListIcon'
import { ListItem } from './styled'

import { ViewType } from '../../types'

type Props = {
  activeView: ViewType
  onChange: (viewType: ViewType) => void
}

export const NavigationView: FC<Props> = ({ activeView, onChange }) => (
  <ul>
    <ListItem isActive={activeView === ViewType.GRID}>
      <button
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange(ViewType.GRID)}
      >
        <GridIcon />
      </button>
    </ListItem>
    <ListItem isActive={activeView === ViewType.LIST}>
      <button
        type="button"
        aria-label="Show as list"
        onClick={() => onChange(ViewType.LIST)}
      >
        <ListIcon />
      </button>
    </ListItem>
  </ul>
)
