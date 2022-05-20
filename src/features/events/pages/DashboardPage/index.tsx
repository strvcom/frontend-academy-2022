import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { CreateButton } from '../../components/EventsList/parts/CreateButton'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <h1>Dashboard</h1>
    <section>
      <h2>Events List</h2>
      <EventsList />
      <CreateButton />
    </section>
  </LayoutInternal>
)
