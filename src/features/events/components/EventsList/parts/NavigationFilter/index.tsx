import type { FC } from 'react'

import { List, ListItem } from './styled'

enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

type Props = {
  onChange: (filterType: FilterType) => void
}

export const NavigationFilter: FC<Props> = ({ onChange }) => (
  <List>
    <ListItem isActive>
      <button type="button" onClick={() => onChange(FilterType.ALL)}>
        All Events
      </button>
    </ListItem>
    <ListItem>
      <button type="button" onClick={() => onChange(FilterType.FUTURE)}>
        Future Events
      </button>
    </ListItem>
    <ListItem>
      <button type="button" onClick={() => onChange(FilterType.PAST)}>
        Past Events
      </button>
    </ListItem>
  </List>
)
