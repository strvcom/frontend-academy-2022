import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { CreateButton } from '../../components/EventsList/parts/CreateButton'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <h1>Dashboard</h1>
      <section>
        <h2>Events List</h2>
        <EventsList />
        <CreateButton />
      </section>
    </Container>
  </LayoutInternal>
)
