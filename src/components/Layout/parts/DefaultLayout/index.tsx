import type { FC, ReactNode } from 'react'

import { Header } from '~/components/Header'
import { Layout } from '~/components/Layout'

interface IDefaultLayout {
  children: ReactNode | ReactNode[] | null
}

export const DefaultLayout: FC<IDefaultLayout> = ({ children }) => (
  <Layout topElement={<Header />} bottomElement={null}>
    <main>{children}</main>
  </Layout>
)
