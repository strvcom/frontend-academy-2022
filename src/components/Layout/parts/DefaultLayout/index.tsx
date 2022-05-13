import { Header } from '~/components/Header'
import { Layout } from '~/components/Layout'

// @ts-ignore // Types to be added in TS lesson
export const DefaultLayout = ({ children }) => (
  <Layout topElement={<Header />} bottomElement={null}>
    <main>{children}</main>
  </Layout>
)
