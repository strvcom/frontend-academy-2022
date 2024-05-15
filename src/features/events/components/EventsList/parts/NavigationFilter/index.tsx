import type { FC } from 'react'

import { FilterType } from '../../../../contexts/event-filter'

import { List, ListItem, MobileToggleLabel } from './styled'

export type Props = {
  activeFilter: FilterType
  onChange: (filterType: FilterType) => void
}

export const NavigationFilter: FC<Props> = ({ activeFilter, onChange }) => (
  <>
    <List>
      <ListItem isActive={activeFilter === FilterType.ALL}>
        <button type="button" onClick={() => onChange(FilterType.ALL)}>
          All Events
        </button>
      </ListItem>
      <ListItem isActive={activeFilter === FilterType.FUTURE}>
        <button type="button" onClick={() => onChange(FilterType.FUTURE)}>
          Future Events
        </button>
      </ListItem>
      <ListItem isActive={activeFilter === FilterType.PAST}>
        <button type="button" onClick={() => onChange(FilterType.PAST)}>
          Past Events
        </button>
      </ListItem>
    </List>

    <MobileToggleLabel>
      <span>Show</span>
      <select onChange={(e) => onChange(e.target.value as FilterType)}>
        <option value={FilterType.ALL}>All Events</option>
        <option value={FilterType.FUTURE}>Future Events</option>
        <option value={FilterType.PAST}>Past Events</option>
      </select>
    </MobileToggleLabel>
  </>
)
