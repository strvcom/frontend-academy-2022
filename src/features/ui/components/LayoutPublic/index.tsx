import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'

type Props = {
  children?: ReactNode
}

export const LayoutPublic: FC<Props> = ({ children }) => (
  <>
    <Header />
    <AsideCover />
    <main>{children}</main>
  </>
)

LayoutPublic.defaultProps = {
  children: null,
}
