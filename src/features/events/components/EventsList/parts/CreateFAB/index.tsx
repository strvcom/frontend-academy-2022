import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const CreateFAB: FC = () => (
  <Link href={Routes.CREATE_EVENT}>
    <a aria-label="Create Event" tabIndex={0}>
      +
    </a>
  </Link>
)
