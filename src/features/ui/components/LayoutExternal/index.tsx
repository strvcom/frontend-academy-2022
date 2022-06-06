import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'
import { VerticalCenter } from '~/features/ui/components/VerticalCenter'

import { AsideCover } from './parts/AsideCover'
import { Layout } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => (
  <Layout>
    <Header isExternal />
    <AsideCover />
    <VerticalCenter as="main">{children}</VerticalCenter>
  </Layout>
)
