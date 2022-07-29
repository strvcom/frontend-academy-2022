import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/constants/routes'

import { PlusIcon } from './parts/PlusIcon'
import { CreateLink } from './styled'

export const CreateButton: FC = () => (
  // Unlike with a plain <a> element, we need to pass passHref prop
  // to make sure Next.js adds the href attribute to our styled component
  <Link href={Routes.CREATE_EVENT} passHref>
    <CreateLink aria-label="Create Event">
      <PlusIcon />
    </CreateLink>
  </Link>
)
