import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { Layout } from '~/features/ui/components/Layout'

import { CreateButton } from '../../components/EventsList/parts/CreateButton'

export const DashboardPage: NextPage = () => (
  <Layout>
    <h1>Dashboard</h1>
    <section>
      <h2>Events List</h2>
      <EventsList />
      <CreateButton />
    </section>
  </Layout>
)
