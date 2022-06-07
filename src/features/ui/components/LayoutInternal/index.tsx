import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'
import { VerticalCenter } from '~/features/ui/components/VerticalCenter'

import { InternalGlobalStyle, Layout } from './styled'

type Props = {
  children: NonNullable<ReactNode>
  headerActionComponent?: ReactNode
}

export const LayoutInternal: FC<Props> = ({
  children,
  headerActionComponent,
}) => (
  <Layout>
    <InternalGlobalStyle />
    <Header actionComponent={headerActionComponent} />
    <VerticalCenter as="main">{children}</VerticalCenter>
  </Layout>
)
