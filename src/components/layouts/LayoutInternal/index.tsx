import type { ReactNode, FC } from 'react'

import { Header } from '../../Header'

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
    <main>{children}</main>
  </Layout>
)
