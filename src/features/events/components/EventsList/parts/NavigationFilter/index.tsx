import type { FC } from 'react'

type FilterType = 'ALL' | 'FUTURE' | 'PAST'

type Props = {
  onChange: (filterType: FilterType) => void
}

export const NavigationFilter: FC<Props> = ({ onChange }) => (
  <ul>
    <li>
      <button type="button" onClick={() => onChange('ALL')}>
        All Events
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange('FUTURE')}>
        Future Events
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange('PAST')}>
        Past Events
      </button>
    </li>
  </ul>
)
