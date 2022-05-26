import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { CreateLink } from './styled'

export const CreateButton: FC = () => (
  <Link href={Routes.CREATE_EVENT} passHref>
    <CreateLink aria-label="Create Event">+</CreateLink>
  </Link>
)
