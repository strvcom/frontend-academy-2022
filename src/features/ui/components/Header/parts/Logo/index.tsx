import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'

export const Logo = () => (
  <Link href={Routes.DASHBOARD}>
    <a>E.</a>
  </Link>
)
