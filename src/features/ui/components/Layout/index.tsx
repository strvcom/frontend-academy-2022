import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

type Props = {
  children?: ReactNode
}

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

Layout.defaultProps = {
  children: null,
}
