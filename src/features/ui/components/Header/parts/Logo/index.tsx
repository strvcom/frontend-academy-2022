import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

type Props = {
  className?: string
}

export const Logo: FC<Props> = ({ className }) => (
  <Link href={Routes.DASHBOARD}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={className}>E.</a>
  </Link>
)

Logo.defaultProps = {
  className: '',
}
