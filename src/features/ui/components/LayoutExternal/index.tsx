import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => (
  <>
    <Header />
    <AsideCover />
    <main>{children}</main>
  </>
)
