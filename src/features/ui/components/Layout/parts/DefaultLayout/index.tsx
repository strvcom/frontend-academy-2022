import { Header } from '~/features/ui/components/Header'
import { Layout } from '~/features/ui/components/Layout'

// @ts-ignore // Types to be added in TS lesson
export const DefaultLayout = ({ children }) => (
  <Layout topElement={<Header />} bottomElement={null}>
    <main>{children}</main>
  </Layout>
)
