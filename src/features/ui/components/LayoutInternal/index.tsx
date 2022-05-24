import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { InternalGlobalStyle } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutInternal: FC<Props> = ({ children }) => (
  <>
    <InternalGlobalStyle />
    <Header />
    <main>{children}</main>
  </>
)
