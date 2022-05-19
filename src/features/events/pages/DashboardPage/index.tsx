import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { Layout } from '~/features/ui/components/Layout'

import { CreateFAB } from '../../components/EventsList/parts/CreateFAB'

export const DashboardPage: NextPage = () => (
  <Layout>
    <h1>Dashboard</h1>
    <h2>Events List</h2>
    <EventsList />

    <CreateFAB />
  </Layout>
)
