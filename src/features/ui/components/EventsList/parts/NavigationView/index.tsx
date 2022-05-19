import type { FC } from 'react'

type Props = {
  onChange: (viewType: string) => void
}

export const NavigationView: FC<Props> = ({ onChange }) => (
  <ul>
    <li>
      <button
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange('GRID')}
      >
        #
      </button>
    </li>
    <li>
      <button
        type="button"
        aria-label="Show as list"
        onClick={() => onChange('LIST')}
      >
        =
      </button>
    </li>
  </ul>
)
