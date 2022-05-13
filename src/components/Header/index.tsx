import Link from 'next/link'

import { Routes } from '~/constants/routes'

export const Header = () => (
  <header>
    <Link href={Routes.DASHBOARD}>
      <a>E.</a>
    </Link>
  </header>
)
